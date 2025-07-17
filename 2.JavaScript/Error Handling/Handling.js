console.log('Error Handling');

let parseStringToJSON = (jsonstring) => {
    try{
        return JSON.parse(jsonstring);
    } catch (error){
        console.log('Error occured!')
        console.log(error.message);
        return {};
    }
}

let obj = {
    a:1,
    b:2,
    c:3,
}

let objString = JSON.stringify(obj);
let newObj = parseStringToJSON(objString);
console.log(newObj);

let newObj2 = parseStringToJSON("{'A' : 1}")

console.log(newObj2);
console.log('End');

// If we dont use try catch block then as the error encounters, the remaining code lines wont be executed WHEREAS,
//if we use try catch block then even after error has encountered , the remaining block of code will be executed!   
 