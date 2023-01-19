
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useState } from 'react';
import { languages } from './Language';



function App() {


  const [languaje, setLanguaje] = useState("spanish")

  const { header, skills, projects, contact } = languages[languaje]

  return (
    <div className="container-fluid app w-100">
      <Header textContent={header} setLanguaje={setLanguaje}  />
      <Skills textContent={skills} />
      <Projects textContent={projects} />
      <Contact textContent={contact} />

    </div>
  );
}

export default App;
