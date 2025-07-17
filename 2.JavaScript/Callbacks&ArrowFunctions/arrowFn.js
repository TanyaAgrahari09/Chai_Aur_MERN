//Normal fn
function add1(first,second){
    return first + second;
}

console.log(add1(5,7));

//anonymous fn assigned to a variable
let add2 = function(first,second){
     return first + second;
}

console.log(add2(4,0))


//Arrow fn: 1
let add3 = (first,second)=>{
    return first+ second;
}

console.log(add3(7,8));

//Arrow fn : 2(bcz of single line ,curly brackets and return are optional)
let add4 = (first,second) => first + second;

console.log(add4(6,8)); 

//bcz of single argument, round brackets are also optional.
const square = num => num*num;

console.log(square(7));

//Application with Array
const numbers = [2,4,6,8,10,12];
let squares = numbers.map(function(num) {
    return num*num;
});
console.log(squares);

let squares1 = numbers.map(num => num*num);
console.log(squares1);
