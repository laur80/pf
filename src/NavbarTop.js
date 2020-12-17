import React from 'react';
import { HashLink } from "react-router-hash-link";
import './DisplayL.css';
// import { Link } from 'react-scroll';

function NavbarTop() {
    return (
    <nav class="navbar navbar-dark bg-dark d-lg-none fixed-top">
        <div class="container-fluid flex-row-reverse">
            <div class="dropdown me-4">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                Menu
                </button>
                <div class="dropdown-menu bg-dark" aria-labelledby="dropdownMenu2">
                    <HashLink className='mb-2 underline' smooth to='#home'>
                    <button class="dropdown-item text-white" type="button">Home</button>
                    </HashLink>
                    <HashLink className='mb-2 underline' smooth to='#about'>
                    <button class="dropdown-item text-white" type="button">About</button>
                    </HashLink>
                    <HashLink className='mb-2 underline' smooth to='#projects'>
                    <button class="dropdown-item text-white" type="button">Projects</button>
                    </HashLink>
                    <HashLink className='mb-2 underline' smooth to='#skills'>
                    <button class="dropdown-item text-white" type="button">Skills</button>
                    </HashLink>
                    <HashLink className='mb-2 underline' smooth to='#contact'>
                    <button class="dropdown-item text-white" type="button">Contact</button>
                    </HashLink>
                </div>
            </div>
        </div>
    </nav>
    )
}

export default NavbarTop
