import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './Sidebar.css'
import { Link } from 'react-router-dom';
// import Home from './Home';
// import About from './About';
// import Projects from './Projects';
// import Skills from './Skills';
// import Contact from './Contact';



function Sidebar() {
    return (
        // <div className='row mt-0 bg-dark d-none d-lg-block position-fixed Fix FullHeight'>
            <nav class="nav d-none d-md-flex flex-column justify-content-center align-items-center bg-dark  position-fixed Fix ">
                <h5 className='text-white'>Popa Laurentiu</h5>
                <h6 className='text-white'>
                <small>Available for work</small>
                </h6>
                <HashLink className=' underline ' smooth to='#home'>Home</HashLink>
                <HashLink className=' underline' smooth to='#about'>About</HashLink>
                <HashLink className=' underline' smooth to='#projects'>Projects</HashLink>
                <HashLink className=' underline' smooth to='#skills'>Skills</HashLink>
                <HashLink className='underline'   smooth to='#contact'>Contact</HashLink>
            </nav>
        // </div>
        )
            }

export default Sidebar





