//Program to calculate x raised to power n (x^n).
function calculatePower(x,n){
    if(n==0){
        return 1;
    }
    return x * calculatePower(x,n-1);
}
let x=6,n=10;
console.log( x +" raised to power "+ n+" is "+calculatePower(x,n));
