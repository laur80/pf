import Home from './Home';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Sidebar from "./Sidebar"
import NavbarTop from "./NavbarTop";
import './App.css'
// import Scroll from './Scroll';
// import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
                <NavbarTop className=''/>
                <Sidebar className=''/>
              <div className='Container  bg-secondary  '>
                <Home/>
                <About/>
                <Skills/>
                <Projects/>
                <Contact/>
                </div>
  
    </>
  );
}
export default App;







