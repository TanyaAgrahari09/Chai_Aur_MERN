//console.log("Hey");
obj ={
    x: 45,
    y: 65,
    z: 'Hello',
    d: {
        a: 67,
        b: 46,
    },
};
console.log('Object',JSON.stringify(obj));
let objCopy=copyMyObject(obj);
console.log('Object Copy',JSON.stringify(objCopy));

objCopy.z= 'Hey';
objCopy.d.a= 100;

console.log('Object',JSON.stringify(obj));
console.log('Object Copy',JSON.stringify(objCopy));

function copyMyObject(obj){
// Deep copy using JSON!
    let objstr=JSON.stringify(obj);
    let obj2 = JSON.parse(objstr);
    return obj2;

// it wont create copy of object, it will just create copy of reference!    
    // let obj2= obj;
    // return obj2;
}

//Deep Copy using recursion


