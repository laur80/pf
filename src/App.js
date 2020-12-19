import Home from './Home';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Sidebar from "./Sidebar"
import NavbarTop from "./NavbarTop";
import './App.css'

function App() {
  return (
    <>
                <NavbarTop />
                <Sidebar />
              <div className='Container '>
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







