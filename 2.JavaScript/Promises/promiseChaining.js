
// NOTE: Promise Chaining

function asyncFn1() {
    return new Promise ((resolve, reject) => {
            setTimeout(() => {
                console.log('data1')
                resolve('Success!')
            }, 5000);
    });
}

function asyncFn2() {
    return new Promise ((resolve, reject) => {
            setTimeout(() => {
                console.log('data2')
                resolve('Success!')
            }, 5000);
    });
}


// console.log('Fetching data1');
// let p1 = asyncFn1();
// p1.then((result) => {
//     console.log(result);
// });

// console.log('Fetching data2');
// let p2 = asyncFn2();
// p2.then((result) => {
//     console.log(result);
// });

// NOTE: we want data1 first then data2

// console.log('Fetching data1...');
// let p1 = asyncFn1();
// p1.then((result) => {
//     console.log(result);
//     console.log('Fetching data2...')
//     let p2 = asyncFn2();
//     p2.then((res) => {
//         console.log(res);
//     });
// });

// NOTE: We can rewrite it as:

// console.log('Fetching data1...');
// asyncFn1().then((res) => {
//     console.log(res);
//     console.log('Fetching data2...');
//     asyncFn2().then((res) => {
//         console.log(res);
//     });
// });

//NOTE: Previous problem soln using promise chaining

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

//NOTE: Approach 2: PROMISE CHAINING
getData(1)
    .then((res) => {
        console.log(res);
        return getData(2)})
    .then((res) =>{
        console.log(res);
        return getData(3)})
    .then((res) => {
        console.log('All data fetched!');
    }) ; 



    





