import React from 'react';
import { HashLink } from "react-router-hash-link";
import './NavbarTop.css';

function NavbarTop() {
    return (
    <nav className=" NavbarTop navbar navbar-dark d-md-none fixed-top">
    <a class="navbar-brand " href="#">
    Lp
    </a>
   
        <div className="dropdown menu-right me-4">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                Menu
            </button>
            <ul className="dropdown-menu " id="hmenu" aria-labelledby="dropdownMenu2">
                <li className='my-3 '>
                    <HashLink className='txt-under-menu' smooth to='#home'>Home</HashLink>
                </li>
                <li className='mb-3'>
                    <HashLink className='txt-under-menu' smooth to='#projects'>Projects</HashLink>
                </li>
                <li>
                    <HashLink className='txt-under-menu' smooth to='#contact'>Contact</HashLink>
                </li>
            </ul>
        </div> 
    </nav>
    );
}

export default NavbarTop
