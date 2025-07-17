
// Lecture 12: Callbacks, Promises & Async Await By- Shraddha di

function sum(a,b){
    console.log(a + b);
} // callback fn

function calculator (a, b , sumCallback){
    sumCallback(a, b);
} // Higher Order Fn

// calculator(1,2, (a , b) =>{
//     console.log(a + b);
// });

function getData(dataId , getNextData){
    setTimeout(() =>{
        console.log('data', dataId);
        if (getNextData){
            getNextData();
        }
    }, 2000)
}



//We want to write a code in which first we need data1 then data2 then data3.(data1 -> data2 -> data3)
//Approach 1
// getData(1);
// getData(2);
// getData(3);

//but we wanted : if data1 then data 2 and if data 2 then data3
// Approach 2 : CALLBACK HELL (Pyramid of Doom)
// getData(1, () => {
//     console.log('getting data2...')
//     getData(2, () =>{
//         console.log('getting data3...')
//         getData(3, () =>{
//             console.log('getting data4...')
//             getData(4);
//         });
//     });
// });

// so to solve the problem of Callback hell, here comes the concept of PROMISES.

// let promise = new Promise((resolve , reject) => {
//     console.log('I am a promise.');
//     resolve('success');
//     //reject("Some error occured");

// });


// fn that returns a promise
function getData(dataId , getNextData){
    return new Promise( (resolve , reject ) => {
        setTimeout(() =>{
            //console.log('data', dataId);
            //resolve("success");
            reject('error')
            if (getNextData){
                getNextData();
            }
        }, 5000);
    });
}

// learning .then() and .catch()
// const getPromise = () => {
//     return new Promise ((resolve, reject) => {
//        console.log('I am a promise');
//        resolve('success');
//        //reject('network error');
//     });
// };

// let pRomise = getPromise();
// pRomise.then((result) => {
//     console.log(`promise resolved with value ${result}`)
// })

// pRomise.catch((error) => {
//     console.log(`Error occured : ${error}`);
// })


