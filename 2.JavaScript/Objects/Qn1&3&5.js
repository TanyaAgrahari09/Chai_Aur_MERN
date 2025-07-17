let product1 = {
    name: 'jeans',
    size: 36,
    price: 2000,
    discount: 30 ,
    brand: 'Levis',
    stretchable : 'no',
    fit: 'regular',
    color:' blue',
    'delivery-time': 'Sunday(between 10am to 6pm)',
};
console.log(product1);
//console.log(typeof (product));
console.log(product1["delivery-time"]);

let product2 = {
    name: 'jeans',
    size: 34,
    price: 1800,
    discount: 20 ,
    brand: 'Levis',
    stretchable : 'no',
    fit: 'regular',
    color:' black',
    'delivery-time': 'Sunday(between 10am to 6pm)',
};
//let product2 = product1;
console.log(product2);

function isIdenticalProduct(product1,product2){
   if(product1===product2){
     return true;
   }
   return false;
}

console.log(isIdenticalProduct(product1,product2));