
let fn1 = () => console.log('Button Clicked!');
    


let fn2= () =>{
    for(let i=0; i<10;i++){
        console.log(i);
    }
}

let button = document.getElementById('myButton');

//Using event handling.
// button.onclick =  fn1;

// button.onclick =  fn2;

//Using event listener.

button.addEventListener('click',fn1);
button.addEventListener('click',fn1);
button.addEventListener('click',fn2);
//button.removeEventListener('click',fn1);
