
import {Routes, Route} from 'react-router-dom';
import './styles/index.css';
import Info from "./components/Info/Info";
import Navbar from './components/Navbar/Navbar';
import About from "./components/About/About";
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
			<Navbar />
			<Info  />
      <About />
      {/* <Skills/> */}
      <Projects/>
      <Experience/>
    </div>
  );
}

export default App;
