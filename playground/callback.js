var getUser =  (callback,id)=>{

    var user={
        id,
        name :"Hammad Ahmed"
    };

    setTimeout(()=>{
        callback(user);
    },3000);
    
};




getUser((userObject)=>{
    console.log(userObject);
},31);