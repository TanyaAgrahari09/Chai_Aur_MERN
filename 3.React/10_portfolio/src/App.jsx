import Header from "./Components/Header";
import AboutMe from "./Components/AboutMe";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Projects from "./Components/Project/Projects";
import Hobbies from "./Components/Hobbies";
import Extracurricular from "./Components/Extracurricular";

import Contact from "./Components/Contact";
import { User } from "lucide-react";
function App() {
  return (
    <div className="bg-slate-100 px-3 py-8">
      <div className="bg-white  max-w-4xl mx-auto rounded-xl shadow-lg">
        <Header></Header>
        <AboutMe></AboutMe>
        <Education></Education>
        <Skills></Skills>
        <Projects></Projects>
        <Hobbies></Hobbies>
        <Extracurricular></Extracurricular>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
