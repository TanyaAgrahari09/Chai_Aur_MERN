
//syntax of anonymous fn
(function(){
    //fn body;
});

//Anonymous fn assigend to a variable
let myFn = function(){
    console.log('I am an anonymous fn.');
}

myFn();

//Anonymous fn as argument
setTimeout(function(){
    console.log('I am an anonymous fn.');
},1000);

//Anonymous fn as argument
setTimeout(myFn,1000);