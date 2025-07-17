//Recursive program to sum the digits of a number.
//like if n is 343 then o/p should be 10.
function recursiveSumOfDigits(n){
    if(n==0){
        return 0;
    }
    let rem = n%10;
    n=Math.floor(n/10);
    let sum =rem + recursiveSumOfDigits(n);
    return sum;
}
let n = 434
console.log("The sum of digits of given number is: "+recursiveSumOfDigits(n));