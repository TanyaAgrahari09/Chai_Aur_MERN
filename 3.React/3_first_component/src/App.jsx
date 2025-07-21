
import './App.css'

// import { DangerButton, SuccessButton } from "./components/Button";
import Button from './components/Button';
import DynamicComponent from './components/DynamicComponent';
import Heading from './components/Heading'
import Paragraph from './components/Paragraph'
import RandomNumber from './components/RandomNUmber';
import StudentList from './components/StudentList';
import Title from './Title';

function App() {
  const students = ["Ram", "Shyam", "Mohan", "Sohan", "Rohan"];

  const newStudents = ["Geeta","Seeta","Reeta","Meeta"];

  const successhandler = () => {
    console.log("Button clicked!");
  }; 

  const deletehandler = () => {
    console.log("Button clicked!");
  }; 

  const handler = () => {
    console.log("Button clicked!");
  }; 

  return (
    <>
      <Title titleText="Hello World!" />
      <Title titleText="I am Tanya" />
      <Title titleText="An aspiring mern developer" />
      <Title titleText="& Java Programmer" />

      <Heading></Heading>
      <RandomNumber />
      <RandomNumber />
      <RandomNumber />
      <RandomNumber />
      <StudentList students={students} />
      <Paragraph></Paragraph>
      <Button btnType="success" btnText="Save" handler={successhandler} />
      <Button btnType="danger" btnText="Delete" handler={deletehandler} />
      <Button btnText="Click me" handler={handler} />
      <DynamicComponent />
      <StudentList students={newStudents} />
    </>
  );
}

export default App
