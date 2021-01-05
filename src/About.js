import React from 'react'
import './About.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function About() {
    return (
        <div className="modal fade  " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable ">
            <div className="modal-content ">

            <div className="modal-header contain-links " >
                <h5 className="modal-title" id="exampleModalLabel">About me</h5>
                <a className="btn mx-auto"  href="https://www.linkedin.com/in/laurentiu-popa80/" target="_blank" rel="noreferrer">
                    <FaLinkedin color="grey" size="2.4rem"/>
                </a>
                <a className="btn btn-secondary " role="button" href="https://github.com/laur80" target="_blank" rel="noreferrer">
                <FaGithub color="white" size="1.4rem"/>
                </a>

                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body" >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                Natus porro eius nisi, sint culpa, quisquam sapiente,<br/>
                placeat asperiores similique id dolores tempore assumenda<br/>
                expedita cum nostrum cupiditate odio dignissimos repellendus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                Natus porro eius nisi, sint culpa, quisquam sapiente,<br/>
                placeat asperiores similique id dolores tempore assumenda<br/>
                expedita cum nostrum cupiditate odio dignissimos repellendus.
                <div id="contain-links" >
                </div>
            </div>

            <div className="modal-footer" >
            
                
            
                <button type="button" className="btn " id="btn-foot" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
</div>
    )
}

export default About