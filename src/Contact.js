import React from 'react'
import './Contact.css';

function Contact() {
    return (
        <div className="Contact " id='contact'>
			<div className="container " id="st">
				<h3 >Contact</h3>
				<form action="#" name="contact_form" method="POST" data-netlify="true">
					<label for="first_name">First Name</label>
					<input name="first_name" type="text" required placeholder="name"/>
					<br/>
					<label for="last_name">Last Name</label>
					<input name="last_name" type="text" />
					<br/>
					<label for="email">Email</label>
					<input name="email" type="email" required placeholder="you@domain.com"/>
					<br/>
					<label for="message">Message</label><br/>
					<textarea name="message" cols="30" rows="10" placeholder="Enter your message here ..." required> </textarea>
					<div className="center">
						<input type="submit" value="Submit"/>
					</div>
				</form>	
			</div>
        
        </div>
    )
}

export default Contact