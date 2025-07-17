let container = document.getElementById('container');
let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');

function click(){
    console.log(this.id);
    this.style.backgroundColor = 'red';
};

//click();

container.addEventListener('click', click);

button1.addEventListener('click',click); 
button2.addEventListener('click',click); 
button3.addEventListener('click',click); 
    
