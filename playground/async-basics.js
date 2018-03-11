console.log("app starting");

var timeout =2000;
var timeout1 = 0
setTimeout(() => {
    
    console.log("async function is called");

}, timeout);

setTimeout(() => {
    
    console.log("second async function is called");

}, timeout1);

console.log("app finishing");