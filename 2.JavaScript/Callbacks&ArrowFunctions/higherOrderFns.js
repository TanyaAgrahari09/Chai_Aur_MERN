//console.log('hey');

//function that returns a function.
const createDouble = function(){
    const double = function(num){
          return num * 2;
    }
    return double;

}

let twice = createDouble();
console.log(twice(10));
// Line 12 and 13 can be written as (in short)
console.log(createDouble()(10));

// Shorted
const createDouble1 = () => {
    const double = (num) => num * 2;
    return double;
}

let twice1 = createDouble();
console.log(twice1(100));
// Line 21 and 22 can be written as (in short)
console.log(createDouble1()(100));

// More shorted
const createDouble2 = () => {
    return num => num*2;
}

let twice2 = createDouble();
console.log(twice2(1000));
console.log(twice2(30));

//Line 29 and 30 can be writtten as (in short)
console.log(createDouble2()(1000));
console.log(createDouble2()(30));
