//console.log("hello")
let student={
   firstname: "Tanya",
   lastname: "Agrahari",
   age: 20,
   address:{
    WardNo : 25,
    Area: 'Chowk Bazar',
    Town: 'Ahraura',
    District: 'Mirzapur',
    state: 'Uttar Pradesh',
   },
   subjects: ['Maths', 'Physics', 'Chemistry','English'],
   feesPaid: 'True',
};

//Destructuring of nested objects 
//1. Directly
let {address:{Area} }= student;
console.log( 'Destructing with same name: ',Area);
//2.Indirectly ny first destructuing address from the student and then area from the address.
let {address}= student;
let {Area: Place}=address;
console.log('Destructing with different name: ',Place);
