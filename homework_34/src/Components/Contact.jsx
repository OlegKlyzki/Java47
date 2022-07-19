import React from 'react'
import Spinner from './Spinner'
import ContactContent from './ContactContent'
import { base_url } from '../Utils/constants'

class Contact extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isLoading: true,
			currentPlanet: ''
		}
	}

	componentDidMount() {
		fetch(`${base_url}v1/planets`)
			.then(response => response.json())
			.then(data => {
				const planets = data.map(item => item.name)
				this.setState({
					isLoading: false,
					planets
				})
			})
	}

	selectedPlanet = (event) => {
		this.setState({currentPlanet: event.target.value})
	}

	render() {
		if (this.state.isLoading) {
			return (
				<Spinner />
			)
		} else {
			return (
				<ContactContent  planets={this.state.planets} selectedPlanet={this.selectedPlanet} currentPlanet={this.state.currentPlanet}/>
			)
		}	
	}
}

export default Contact