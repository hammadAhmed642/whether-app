const request = require('request');
var geoCodeAddress =(address)=>{
    return new Promise((reject,resolve)=>{
        request({
            url:`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeURIComponent(address)}`,
            json:true
        },(error,response,body)=>{
        
            if(error){
                reject('you are not connected to google api')
            }
            
            else if(body.status=='OVER_QUERY_LIMIT'){
                reject(body.status);
        
            }
            else if(body.status=='ZERO_RESULTS'){
                reject('please the check the input');
            }
            else if(body.status=='OK'){
    
                resolve({
                    Address:body.results[0].formatted_address,
                    Latitude:body.results[0].geometry.location.lat,
                    Longitute:body.results[0].geometry.location.lng,
                });
                //console.log(`Address: ${body.results[0].formatted_address}`);
                //console.log(`latitude: ${body.results[0].geometry.location.lat}`);
               // console.log(`longitude: ${body.results[0].geometry.location.lng}`);
            }    
        });
        
    } ) ;  


}
geoCodeAddress('191kokoko45').then((location)=>{
    console.log(JSON.stringify(location,undefined,2));
},(errorMessage)=>{
    console.log(errorMessage);
});