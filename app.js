const request = require('request');
const geocode = require('./geocode/geocode');
const whether = require('./whether/whether');
const yargs=require('yargs');
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

  //  console.log(argv);
    
     
 geocode.geoCodeAddress(argv.address,(errorMesssage,result)=>{

     if(errorMesssage){
             console.log(errorMesssage);
     }
     else{
             
         //console.log(result);
        whether.getWheather(result.Latitude,result.Longitute,(errorvalue,wheatherUpdate)=>{
            if(errorvalue){
                console.log(errorvalue);
            }
            else{
                console.log(`It's currently temperature is ${wheatherUpdate.temperature}`);

            }
        });

     }
 });


