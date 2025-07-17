
function greeting(name){
    console.log("Hello",name);
}// here greeting is the callback fn


//Anonymous fn as values
// let greeting = function(name){
//     console.log("Hello",name);
// }

function capitalize(name){
    let upper =name.toUpperCase();
    console.log(upper);
}// callback fn


function performingCallback(callback){
   let name = prompt("Enter your name:");
   callback(name);
}// fn that will take callback fn as an argument

performingCallback(greeting);
performingCallback(capitalize);