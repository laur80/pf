import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './Sidebar.css'
import eu from "./index.png"


function Sidebar() {
    let sr=eu;
    return (
        // <div className='row mt-0 bg-dark d-none d-lg-block position-fixed Fix FullHeight'>
            <nav class="nav d-none d-md-flex flex-column  justify-content-center align-items-center position-fixed Fix ">
                <img className='Photo mb-3' src={sr} alt='pers.photo'/>
                <h5 className='name-bar'>Popa Laurentiu</h5>
                <h6 >
                <small className='work'>Available for work</small>
                </h6>
                <HashLink className=' underln ' smooth to='#home'>Home</HashLink>
                <HashLink className=' underln' smooth to='#projects'>Projects</HashLink>
                {/* <HashLink className=' underln' smooth to='#skills'>Skills</HashLink> */}
                <HashLink className=' underln'   smooth to='#contact'>Contact</HashLink>
            </nav>
        // </div>
        )
            }

export default Sidebar





