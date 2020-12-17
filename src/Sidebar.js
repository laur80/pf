import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './DisplayL.css'
import { Link } from 'react-router-dom';
// import Home from './Home';
// import About from './About';
// import Projects from './Projects';
// import Skills from './Skills';
// import Contact from './Contact';



function Sidebar() {
    return (
        <div className='row bg-dark d-none d-lg-block position-fixed Fix '>
            <nav class="nav navbar-nav flex-column justify-content-center align-items-center ">
                <h5 className='ms-4 text-white'>Popa Laurentiu</h5>
                <h6 className='ms-3 mb-5 text-white'>
                <small>Available for work</small>
                </h6>
                <HashLink className='mb-0 underline ' smooth to='#home'>Home</HashLink>
                <HashLink className='mb-0 underline' smooth to='#about'>About</HashLink>
                <HashLink className='mb-0 underline' smooth to='#projects'>Projects</HashLink>
                <HashLink className='mb-0 underline' smooth to='#skills'>Skills</HashLink>
                <HashLink className='underline'   smooth to='#contact'>Contact</HashLink>
            </nav>
        </div>
        )
            }

export default Sidebar





