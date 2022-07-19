import React from 'react'
import ContactOption from './ContactOption'
import style from '../css_modules/contactForm.module.css'
const ContactContent = ({ planets, selectedPlanet }) => {
	
	const getAndClearSelect = (event) => {
		selectedPlanet(event);
		// event.target.value = 'Open this select menu';
	}

	return (
		<div className={`container pb-2 ${style.contact_container}`}>
			<div className={`row d-flex align-items-center ${style.contact_row}`}>
				<form className={`col-6 offset-3 p-2 ${style.contact_form}`}>
					<div className="mb-3">
						<label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
						<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your name.." />
					</div>
					<div className="mb-3">
						<label htmlFor="exampleInputPassword1" className="form-label">Last Name</label>
						<input type="text" className="form-control" id="exampleInputPassword1" placeholder="Your last name.." />
					</div>
					<label htmlFor="planets">Planets</label>
					<select onChange={getAndClearSelect} defaultValue="Open this select menu" name="planets" className={`form-select mb-3 ${style.select_text}`}>
						<option>Open this select menu</option>
						{planets.map((item, index) => <ContactOption key={index} value={item}/>)}
					</select>
					<div className="mb-3">
						<label htmlFor="exampleFormControlTextarea1" className="form-label">Comments</label>
						<textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
					</div>
					<button type="submit" className="nav-item btn btn-danger mx-1">Submit</button>
				</form>
			</div>
		</div>
	)
}

export default ContactContent