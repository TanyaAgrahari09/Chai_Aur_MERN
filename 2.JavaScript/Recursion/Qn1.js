function printNum( number){
    if(number==1){
        console.log(number);
        return ;
    }
    console.log(number);
    printNum(number-1);
}


//console.log(printNum(9));
 function printN(N, currValue){
    if(currValue > N){
        return;

    }
    console.log(currValue);
    printN(N, currValue+1);
    
 }
 console.log(printN(10,1));
