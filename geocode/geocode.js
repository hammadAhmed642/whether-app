const request = require('request');


var geoCodeAddress=(address,callback)=>{

    request({
        url:`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeURIComponent(address)}`,
        json:true
    },(error,response,body)=>{
    
        if(error){
            callback('you are not connected to google api')
        }
        
        else if(body.status=='OVER_QUERY_LIMIT'){
            callback(body.status);
    
        }
        else if(body.status=='ZERO_RESULTS'){
            callback('please the check the input');
        }
        else if(body.status=='OK'){

            callback(undefined,{
                Address:body.results[0].formatted_address,
                Latitude:body.results[0].geometry.location.lat,
                Longitute:body.results[0].geometry.location.lng,
            });
            //console.log(`Address: ${body.results[0].formatted_address}`);
            //console.log(`latitude: ${body.results[0].geometry.location.lat}`);
           // console.log(`longitude: ${body.results[0].geometry.location.lng}`);
        }    
    });
    
}


module.exports.geoCodeAddress=geoCodeAddress;



