import './Button.css'

const Button = ({btnType,btnText,handler})=> {

  if(btnType === 'success'){
  return (
    <button className="green-btn" onClick={handler}>
      {btnText}
    </button>
  );
  }

  else if (btnType === 'danger'){
  return (
    <button className="red-btn" onClick={handler}>
      {btnText}
    </button>
  );
  }

  else{
  return (
    <button className="blue-btn" onClick={handler}>
      {btnText}
    </button>
  );
  }
}

export default Button;




// export function DangerButton(){
//     return (
//     <button className='red-btn'>Delete</button>
//   );
// }

// export function SuccessButton() {
//   return (
//   <button className="green-btn">Save</button>
//   );
// }






//export default DangerButton; 