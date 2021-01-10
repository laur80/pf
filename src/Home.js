import React from 'react';
import About from "./About"
import { HashLink } from "react-router-hash-link";
import './Home.css';
// import { FaGithub } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";

function Home() {

    return (
        <>
        <About/>
        <nav className="nav  Home" id='home' >
        <div className='container-home'>
            <h1 className="txtName" ><bold>Laurentiu Popa</bold></h1>
            <h2 className='txtDev'>Web Developer</h2>
            <div className='btns'>
                <HashLink smooth to='#projects' className="bt bt1">Projects</HashLink>
                <button type="button" className="bt bt2" data-bs-toggle="modal" data-bs-target="#exampleModal">About</button>
                <HashLink smooth to='#contact' className="bt bt3 ">Contact</HashLink>
            </div>

            <div>
            

            </div>
        </div>
        </nav>
        </>
    );
}

export default Home;
