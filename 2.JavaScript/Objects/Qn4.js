let obj={
  greeting:'Hello!',
  message:'good job!',
  status:'complete',
  
};

// Reguler destructuring-> Variables having the same name as the name of the properties of object.  
const{ message,status}=obj;
console.log(message);
console.log(status);
console.log(obj);


//Destructuing with different names.
const{message: remark,status:progress}= obj;
console.log(remark);
console.log(progress);
console.log(obj);