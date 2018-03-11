
var asyncAdd = (a,b)=>{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(typeof a === 'number' &&  typeof b ==='number'){
            resolve(a+b);
        }
        else{
            reject('Arguments must be a number');
        }
    },2500)

    });
};

asyncAdd(8,'5').then((result)=>{
    console.log(`Add:${result}`);
    return asyncAdd(result,33);
}).then((result)=>{
    console.log(`answer should be something : ${result}`)
}).catch((error)=>{
    console.log(error);
});



// var somePromise = new Promise((resolve,reject)=>{
// setTimeout(()=>{
//    // resolve("promise is worked!!")
//     reject(`error ha tu error ha na`);
// },2500);

    
// });


// somePromise.then((fullfill)=>{
//     console.log(`Sucess:${fullfill}`);

// },(errorMessage)=>{

//     console.log(`Error:${errorMessage}`);
// })
