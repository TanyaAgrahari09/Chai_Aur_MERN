
 async function hello(){
    console.log('hello');
}

//NOTE: an async fn automatically returns a promise.

function api(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Weather data');
            resolve(200) // 200 represents a successful api call.
        },2000);
    });
}

//NOTE: since api is an asynchronous fn , we can use await here.

//await api();

//NOTE: await is only valid in async fn. so to use it , we need to use it inside an async fn.

async function getWeatherData(){
    await api();// 1st call, jaise hi yeh call jayegi , hmara baaki ka kam is fn ka ruk jaega until this call get completed.
    await api();// 2nd call, yeh call tbi jaegi jb 1st call cmplt ho jaegi.
}


//NOTE: so there is a fn that returns a promise, to handle it, here we dont use .then() or .catch() fn, rather we do it using async and await!