import React from 'react'
import './Contact.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";

function Contact() {

	function sendEmail(e) {
		e.preventDefault();
	
		emailjs.sendForm('gmail', 'portfolio', e.target, 'user_XDxlk4DCCTlOv3xwP2ZMk')
			.then((result) => {
				console.log(result.text);
		}, (error) => {
				console.log(error.text);
		});
		e.target.reset()
	}
	

    return (
        <div className="Contact d-grid " id='contact'>
			<div className="container" id="st">
				<h3 >Contact</h3>
				<form onSubmit={sendEmail} name="contact" method="POST" data-netlify="true" >
					<label htmlFor="name">Name</label>
					<input name="name" type="text" required placeholder="name"/>
					<br/>
					<label htmlFor="email">Email</label>
					<input name="email" type="email" required placeholder="you@domain.com"/>
					<br/>
					<label htmlFor="message">Message</label><br/>
					<textarea name="message" cols="30" rows="7" placeholder="Enter your message here ..." required> </textarea>
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