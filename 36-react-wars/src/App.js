import React from 'react';
import './App.css';
import Start from './Components/Start.jsx'
import Game from './Components/Game.jsx';
import Result from './Components/Result.jsx';
import { start, game, result } from './Utils/Constants.jsx'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			page: start,
			name: ''
		}
	}

	changeName = (name) => {
		this.setState({ name })
	}

	changePage = (page) => {
		this.setState({ page })
	}

	render() {
		switch (this.state.page) {
			case game:
				return <Game changePage={this.changePage} name={this.state.name}/>;
			case result:
				return <Result changePage={this.changePage}/>;
			default:
				return <Start changePage={this.changePage} changeName={this.changeName}/>;
		}
	}
}

export default App;
