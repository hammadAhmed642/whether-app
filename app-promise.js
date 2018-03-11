
const yargs=require('yargs');
const axios =require('axios');
const argv = yargs
            .option({
                a:{
                    demand:true,
                    alias:'address',
                    describe:'Address to fetch weather for',
                    string:true

                }
            })
            .help()
            .alias('help','h')
            .argv;


          var  geoCodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeURIComponent(argv.address)}`;
        
axios.get(geoCodeUrl).then((response)=>{

    if(response.data.status==="ZERO_RESULTS"){
         throw new Error('plese input correct address');
    }
    var lat = response.data.results[0].geometry.location.lat;
    var long = response.data.results[0].geometry.location.lng;
    var whetherUrl = `https://api.darksky.net/forecast/1203eec4866e5685598578d353dcc492/${lat},${long}`;
    console.log(response.data.results[0].formatted_address,)
    return axios.get(whetherUrl);
    
   // console.log('response.data');
}).then((response)=>{
        console.log(`this is the current temperature ${response.data.currently.temperature}`);
}).catch((error)=>{
    if(error.code==='ENOTFOUND'){
        console.log('unable to connect to the server');
    }
    else{
        console.log(error.message)
    }
});