const request = require('request');

var getWheather = (lat,long,callback)=>{
//console.log(lat,long);
    request({
        url:`https://api.darksky.net/forecast/1203eec4866e5685598578d353dcc492/${lat},${long}`,
        json:true
    },(error,response,body)=>{
        if(!error && response.statusCode==200){
            
            callback(undefined,{temperature:body.currently.temperature});
        }
        else{
            callback('unable to fetch the temprature');
        }
        
    });
}

module.exports.getWheather=getWheather;