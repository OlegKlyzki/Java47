import React from 'react';
import "../css_modules/contact.module.css";
import { base_url } from "../utils/constants";

class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			planets: ['wait...']
		};
	}

	componentDidMount() {
		const planets = localStorage.planetsLength;
		const currentTime = Date.now();
		const elapsedTime = Math.floor((currentTime - localStorage.getItem('startTime')) / (1000 * 3600 * 24));
		if (planets && elapsedTime < 31) {
			console.log('local')
			const planets = [];
			for (let i = 0; i < localStorage.planetsLength; i++) {
				planets.push(localStorage.getItem(i))
			}
			this.setState({ planets })
		} else {
			fetch(`${base_url}/v1/planets`)
				.then(response => response.json())
				.then(data => data.map((item, index) => localStorage.setItem(index, item.name) || item.name))
				.then(planets => localStorage.setItem('planetsLength', planets.length) || this.setState({ planets }))
				localStorage.setItem('startTime', Date.now())
				console.log('server')
		}
	}

	componentWillUnmount() {
		console.log('Component Contact unmounted');
	}

	render() {
		return (
			<div>
				<form onSubmit={(e) => {
					e.preventDefault();
					console.log(e.currentTarget.planet.value);
					console.log(e.currentTarget.firstname.value);
				}}>
					<label>First Name
						<input type="text" name="firstname" placeholder="Your name.." />
					</label>
					<label>Planet
						<select name="planet">{
							this.state.planets.map((item, index) => <option value={item} key={index}>{item}</option>)
						}
						</select>
					</label>
					<label>Subject
						<textarea name="subject" placeholder="Write something.." />
					</label>
					<input type="submit" value="Submit" />
				</form>
			</div>
		)
	}
}

export default Contact;
