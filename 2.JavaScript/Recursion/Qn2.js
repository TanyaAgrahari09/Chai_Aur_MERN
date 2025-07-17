// We need to generate nth Fibonacci term.
// like if user enter 9 then o/p should be: 34 and so on.
function Fibonacci(n){
    if(n>=1){
        return n;
    }else{
       return Fibonacci(n-1) + Fibonacci(n-2);
    }
}
//let n=parseInt(prompt("Enter the term that you want to generate: "),10);
//console.log( n+'th term is '+ Fibonacci(n));

// We need to generate finonacci series of a given user input number.
// like if user enter 9 then o/p should be: 0 1 1 2 3 5 8 13 21 34 55
function generateFibonacci(n){
    let firstTerm=0;
    let secondTerm=1;
    let thirdTerm=0, i=1;
    while(i<=n){
        thirdTerm= firstTerm + secondTerm;
        console.log(thirdTerm);
        firstTerm = secondTerm;
        secondTerm = thirdTerm;
        i++;
        
    }

}
var n=prompt("Enter the number of terms: ");
console.log("Fibonacci series of "+n+" term is: ");

generateFibonacci(n);


