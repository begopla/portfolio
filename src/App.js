
import './styles/index.css';
import Info from "./components/Info/Info";
import Navbar from './components/Navbar/Navbar';
import About from "./components/About/About";
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer'
function App() {  
  return (
    <div className="App">
			<Navbar />
			<Info  />
      <About />
      <Projects/>
      <Experience/>
      <Contact/> 
      <Footer/>
    </div>
  );
}

export default App;
