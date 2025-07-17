//console.log('hello');

//Question 1
let arr=[5,6];
arr.push(7);
console.log(arr);
arr.unshift(4);
console.log(arr);
// let myArr= arr.shift(4);
// console.log(arr);
// console.log(myArr);
// let newArr= arr.pop(7);
// console.log(arr);
// console.log(newArr);

//Question2

function findElement(arr,index){
    for(i=0;i<arr.length;i++){
        if(i==index){
            return arr[i];
        }
    }
    return -1;
}

console.log(findElement(arr,arr.length-1));

//Question3

let num= arr.slice(0,arr.length);
console.log(num);