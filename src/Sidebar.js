import React from 'react';
import { useState } from "react";
import { HashLink } from 'react-router-hash-link';
import './Sidebar.css'
import eu from "./index.png"


function Sidebar() {
    
    const [activeH, setActiveH] = useState(true);
    const [activeP, setActiveP] =useState(false);
    const [activeC, setActiveC] =useState(false);

    function activeLink () {
        // console.log(window.scrollY );
        if(window.scrollY < 350) {
            setActiveH(true);
            setActiveP(false);
            setActiveC(false);
        }else if((window.scrollY > 350) && (window.scrollY < 1200)){
            setActiveH(false);
            setActiveP(true);
            setActiveC(false);
        }else if(window.scrollY > 1200 ) {
            setActiveH(false);
            setActiveP(false);
            setActiveC(true);
        }
    }
    window.addEventListener("scroll",activeLink);

    return (
    
            <nav className="nav d-none d-md-flex flex-column  justify-content-center align-items-center position-fixed Fix ">
                <img className='Photo mb-3' src={eu} alt='pers'/>
                <h5 className='name-bar'>Laurentiu Popa</h5>
                <h6 >
                <small className='work'>Available for work</small>
                </h6>
                <HashLink
                className={activeH ? "linkSidebar setactive" : "linkSidebar"}
                smooth to='#home' >
                Home
                </HashLink>
                <HashLink 
                className={activeP ? "linkSidebar setactive" : "linkSidebar"}
                smooth to='#projects'>
                Projects
                </HashLink>
                
                <HashLink 
                className={activeC ? "linkSidebar setactive" : "linkSidebar"}
                smooth to='#contact'>
                Contact
                </HashLink>
            </nav>
        
        )
            }

export default Sidebar





