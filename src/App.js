
import {Routes, Route} from 'react-router-dom';
import './styles/index.css';
import Home from "./pages/Home";
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
			<Navbar />
			<Routes>
       <Route path='/' element={<Home  />} />
 
    </Routes>
    
    </div>
  );
}

export default App;
