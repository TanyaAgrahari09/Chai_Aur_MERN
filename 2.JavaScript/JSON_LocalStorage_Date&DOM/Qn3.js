// let count=0;
// function counter(){
//    count +=1;
//    document.getElementById('line').innerHTML= `You have pressed the button ${count} times!`
// }

let count=0;
const button = document.getElementById('counter');

button.addEventListener('click', function(){
    count++;
    button.textContent = count;

    if(count%2 === 0){
        button.className= 'even';
    }else{
        button.className='odd';
    }

});

