import React from 'react'
import './Contact.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Contact() {
    return (
        <div className="Contact " id='contact'>
			<div className="container d-block " id="st">
				<h3 >Contact</h3>
				<form name="contact" method="POST" data-netlify="true" >
		
					<label htmlFor="first_name">First Name</label>
					<input name="first_name" type="text" required placeholder="name"/>
					<br/>
					<label htmlFor="last_name">Last Name</label>
					<input name="last_name" type="text" />
					<br/>
					<label htmlFor="email">Email</label>
					<input name="email" type="email" required placeholder="you@domain.com"/>
					<br/>
					<label htmlFor="message">Message</label><br/>
					<textarea name="message" cols="30" rows="10" placeholder="Enter your message here ..." required> </textarea>
					<div className="center">
						<button className="btnc" type="submit">Submit</button>
					</div>
				</form>	

				<div className="contain-links justify-content-around">
				<a className=" btn btn-secondary"  href="https://www.linkedin.com/in/laurentiu-popa80/" target="_blank" rel="noreferrer">
                    <FaLinkedin size="2rem"/>
                </a>
                <a className="btn btn-secondary " role="button" href="https://github.com/laur80" target="_blank" rel="noreferrer">
                <FaGithub color="white" size="2rem"/>
                </a>
            	</div>
			</div>
        
        </div>
    )
}

export default Contact