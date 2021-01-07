import React from 'react';
import {projects} from "./ProjectsList";
import { v4 as uuidv4 } from 'uuid';
import './Project.css';
import {FaHtml5} from "react-icons/fa"
import {SiCss3} from "react-icons/si"
import {SiJavascript} from "react-icons/si"
import {FaBootstrap} from "react-icons/fa"
import {SiMaterialUi} from "react-icons/si"
import {FaReact} from "react-icons/fa"
import {DiResponsive} from "react-icons/di"
import {AiOutlineApi} from "react-icons/ai"
import {GiMatterStates} from "react-icons/gi"

function Projects() {
    
    return (
        <div className="Project " id='projects'>

            <div id='st' className='container-cards'>
                {projects.map(item=>{
                return (
                    <div className="card" id="card" key={uuidv4()}>
                    <img src={item.src} className="card-img-top " id="img-proj" alt="..."/>
                    <div className="card-body">
                        <h4 className="card-title">{item.name}</h4>
                        <div className="skills d-flex">
                            <div>{item.icons[0]}</div>
                            <div>{item.icons[1]}</div>
                            <div>{item.icons[2]}</div>
                            <div>{item.icons[3]}</div>
                        </div>
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

            {/* <div className="tools">
                <div>

                <FaHtml5 size="2rem"/>
                </div>
                <div>

                <SiCss3 size="2rem"/>
                </div>
                <div>
                    <FaBootstrap size="2rem"/>
                </div>
                <div>
                    <SiMaterialUi size="2rem"/>
                </div>
                <div>
                    <SiJavascript size="2rem"/>
                </div>
                <div>
                    <FaReact size="2rem"/>
                </div>
                <div>
                <AiOutlineApi size="2rem"/>
                </div>
           
            </div> */}
        </div>
    );
}

export default Projects;