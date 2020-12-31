import React from 'react';
import { Link } from "react-router-dom";
import {projects} from "./ProjectsList";
import { v4 as uuidv4 } from 'uuid';
import './Project.css';

function Projects() {
    console.log(projects);
    return (
        <div className="Project " id='projects'>
            <div id='st' className='container-cards'>
            
                {projects.map(item=>{
                return (
                    <div class="card" id="card" key={uuidv4()}>
                    <img src={item.src} class="card-img-top " id="img-proj" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{item.name}</h5>
                        <p class="card-text">{item.text} </p>
                        <div className="btns-card">
                            <a href={item.code} class="bt-card">Code</a>
                            <a href={item.live} class="bt-card">Live</a>
                        </div>
                        
                    </div>
                </div>
                );
                })} 
            </div>
        </div>
    );
}

export default Projects;