import React from 'react'
import { game } from '../Utils/Constants'

class Start extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: ''
		}
	}

	changeName = (e) => {
		this.setState({name: e.target.value.toUpperCase()});
		this.props.changeName(e.target.value.toUpperCase()) 
	}

	render() {
		return (
			<div className="container">
				<div className="start_title">
					<h1>Ready for WAR</h1>
				</div>
				<div>
					<input onChange={this.changeName} 
					value={this.state.name}
					className="start_input" type="text" placeholder="Enter your name" />
				</div>
				<div>
					<button onClick={() => this.props.changePage(game)}>Start</button>
				</div>
			</div>
		)
	}
}

export default Start