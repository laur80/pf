import React from 'react';
import { HashLink } from "react-router-hash-link";
import './NavbarTop.css';
// import { Link } from 'react-scroll';

function NavbarTop() {
    return (
    <nav class=" NavbarTop navbar navbar-dark d-md-none fixed-top">
        <div class="dropdown menu-right me-4">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                Menu
            </button>
            <ul class="dropdown-menu " id="hmenu" aria-labelledby="dropdownMenu2">
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

{/* <div class="container-fluid">
<a class="navbar-brand" href="#">Popa Laurentiu</a>
<button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse hmenu navbar-collapse" id="navbarText">
<ul class="navbar-nav me-auto mb-2 mb-lg-0">
    <li class="nav-item">
    <HashLink className=' txt-under-menuline ' smooth to='#home'>Home</HashLink>
    </li>
    <li class="nav-item">
    <HashLink className=' txt-under-menuline' smooth to='#projects'>Projects</HashLink>
    </li>
    <li class="nav-item">
    <HashLink className=' txt-under-menuline'   smooth to='#contact'>Contact</HashLink>
    </li>
</ul>
</div>
</div> */}