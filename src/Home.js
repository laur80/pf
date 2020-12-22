import React from 'react'
import './Home.css';
import { HashLink } from "react-router-hash-link";


function Home() {
   

    return (
        <nav class="nav d-inline-flex st  justify-content-center align-items-center Home" id='home' >
        <div className='cont' id="st">

            <h1 className="txtH ">Popa Laurentiu</h1>
            <h2 className='txtDev ps-5 fs-1 text-danger '>Front-end Developer</h2>
            <HashLink smooth to='#projects' class="btn ms-5 btn-secondary ">Projects</HashLink>
            <HashLink smooth to='#contact' class="btn ms-5 btn-secondary ">Contact</HashLink>
            
        </div>
        </nav>
    )
}

export default Home