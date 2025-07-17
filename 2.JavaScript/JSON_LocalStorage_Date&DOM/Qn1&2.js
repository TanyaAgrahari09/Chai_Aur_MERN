
//display good morning, afternoon and night based on current hour.

const date= new Date();
let h =date.getHours();
//console.log(h);
//console.log(date.getMinutes());

function displayGreeting(h){
    if(h>=6 && h<12){
        return 'Good morning';
    }
    else if (h>=12 && h<16){
        return 'Good Afternoon';

    }
    else if(h>=16 && h<21){
        return 'Good evening';
    }
    else{
        return 'Good night';
    }
}

let greet = displayGreeting(h);
let userName = prompt("Enter your name: ");
console.log(`${greet},${userName}!`);


