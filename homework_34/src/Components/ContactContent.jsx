import React from 'react'
import ContactOption from './ContactOption'

const ContactContent = ({ planets }) => {
	return (
		<div className="container pb-2">
			<div className="row">
				<form className="col-6 offset-3">
					<div className="mb-3">
						<label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
						<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your name.." />
					</div>
					<div className="mb-3">
						<label htmlFor="exampleInputPassword1" className="form-label">Last Name</label>
						<input type="text" className="form-control" id="exampleInputPassword1" placeholder="Your last name.." />
					</div>
					<label htmlFor="planets">Planet</label>
					<select name="planets" className="form-select mb-3" aria-label="Default select example">
						<option selected value="Open this select menu">Open this select menu</option>
						{planets.map((item, index) => <ContactOption key={index} value={item} />)}
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