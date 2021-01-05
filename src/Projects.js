import React from 'react';
import {projects} from "./ProjectsList";
import { v4 as uuidv4 } from 'uuid';
import './Project.css';

function Projects() {

    return (
        <div className="Project " id='projects'>
            <div id='st' className='container-cards'>
            
                {projects.map(item=>{
                return (
                    <div className="card" id="card" key={uuidv4()}>
                    <img src={item.src} className="card-img-top " id="img-proj" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.text} </p>
                        <div className="btns-card">
                            <a href={item.code} className="bt-card" target="_blank" rel="noreferrer">Code</a>
                            <a href={item.live} className="bt-card" target="_blank" rel="noreferrer">Live</a>
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