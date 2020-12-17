import Home from './Home';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Sidebar from "./Sidebar"
import NavbarTop from "./NavbarTop";
import './DisplayL.css'
// import Scroll from './Scroll';
// import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      {/* <Scroll/> */}
      <div className='container-fluid d-lg-block p-0 mx-0 '>
          <div className='row  d-lg-FullHeight '>
              <div className='col-lg-2 col-md-12 bg-dark d-lg-flex justify-content-center  d-lg-Fix'>
                <NavbarTop className=''/>
                <Sidebar className=''/>
              </div>
              <div className='col-lg-10 col-md-12 bg-secondary ms-lg-auto '>
                        {/* <Route path='/' exact component={Home}/>
                        <Route path='/skills' component={Skills}/> */}
                <Home/>
                <About/>
                <Skills/>
                <Projects/>
                <Contact/>
                </div>
          </div>
      </div>
    </>
  );
}
export default App;






