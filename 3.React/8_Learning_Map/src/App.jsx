
import './App.css'
import List from './components/LIst';

function App() {
  const topics = [
    "Creating project by CRA",
    "Creating Project by Vite",
    "Components",
    "CSS Library: Bootstrap",
    "Created todo UI using Bootstrap",
    "Luicide : Icons Library",
    "CSS Library: Tailwind",
    "Map method",
    "Fragments"
  ];

  // let topics ;
  return (
    <>
      <h1 className='text-3xl'>List of React Topics studied till now:</h1>
      <List list={topics} />
    </>
  )
}

export default App;
