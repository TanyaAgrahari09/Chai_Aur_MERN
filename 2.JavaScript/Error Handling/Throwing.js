
// In case of denominator = 0, JS doesnt throw any error, it evaluates the expression to infinity. But here we are try create our own error in case of denominator = 0.

function divide (a ,b){
    if (b===0){
        throw new Error('Divide  by zero '); 
    }
    return a / b;
}

console.log(divide(3,6));
console.log(divide(6,3));

try{
    console.log(divide(6,0));

} catch (error) {

    console.log('Error occured');
    console.log(error.message);

}

console.log(divide(8,4));



