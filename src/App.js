import Home from './Home';

import Projects from './Projects';
// import Skills from './Skills';
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
                <Projects/>
              
                <Contact/>
                </div>
  
    </>
  );
}
export default App;







