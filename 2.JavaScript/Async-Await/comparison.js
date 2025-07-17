
// Solving the same task using all the three approches.
// Async-Await > Promise Chaining > Callback hell

function getData(dataId , getNextData){
    return new Promise( (resolve , reject ) => {
        setTimeout(() =>{
            console.log('data', dataId);
            resolve("Success");
            //reject('error')
            if (getNextData){
                getNextData();
            }
        }, 2000);
    });
}

//NOTE: Approach 3: Async-Await

async function getAllData(){
    console.log('getting data1...');
    await getData(1);
    console.log('getting data2...');
    await getData(2);
    console.log('getting data3...');
    await getData(3);
    console.log('getting data4...');
    await getData(4);

};

//NOTE: It can be rewrite as:

(async () => {
    console.log('getting data1...');
    await getData(1);
    console.log('getting data2...');
    await getData(2);
    console.log('getting data3...');
    await getData(3);
    console.log('getting data4...');
    await getData(4);

})();

//NOTE: Approach 2: PROMISE CHAINING

// getData(1)
//     .then((res) => {
//         console.log(res);
//         return getData(2)})
//     .then((res) =>{
//         console.log(res);
//         return getData(3)})
//     .then((res) => {
//         console.log('All data fetched!');
//     }) ; 


//NOTE:  Approach 1 : CALLBACK HELL (Pyramid of Doom)

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




    




