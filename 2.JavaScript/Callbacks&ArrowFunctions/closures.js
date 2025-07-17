let first = 45;

let outer = (outerArg) => {
   const outerConst = 3.14;

   let inner = (innerArg) => {
    const innerConst = 2.71;
    console.log(`first: ${first}`);
    console.log(`outerArg: ${outerArg}`);
    console.log(`outerConst: ${outerConst}`);
    console.log(`innerArg: ${innerArg}`);
    console.log(`innerConst: ${innerConst}`);
   };


   console.log(`Outer first: ${first}`);
   console.log(`Outer outerArg: ${outerArg}`);
   console.log(`Outer outerConst: ${outerConst}`);

    
   return inner;
}

// const innerr = outer(78);
//innerr(90);

//Line 18 and 19 can be written as:
//outer(78)(90);

let createCounter = () =>{
    let count =0;
    return () =>  ++count;
    
};

console.log(createCounter()());
console.log(createCounter()());
console.log(createCounter()());

let counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

let counter2 = createCounter();
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());

//just exploring with myself

let createCounter3 = () =>{
    let count = 0;
    return () => {
        let n = prompt("Enter the value of n: ");
        for(count =0 ; count <= n ; count++)
            console.log(`Count is : ${count}`);
    }
}

 let counter3 = createCounter3();
 counter3();