import React from 'react';
import './App.css';
import Start from './Components/Start.jsx'
import Game from './Components/Game.jsx';
import Result from './Components/Result.jsx';
import { start, game, result } from './Utils/Constants.jsx'
import { cardsComputer, cardsUser, getCardsComputer, getCardsUser } from './Utils/Constants'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			page: start,
			name: '',
			cardsComputer: cardsComputer[0],
			cardsUser: cardsUser[0],
			index: 0
		}
	}

	changeCard = (page) => {
		if (cardsComputer.length !== 0 ) {
			cardsComputer.splice(this.state.index, 1);
			cardsUser.splice(this.state.index, 1);
			this.setState({ cardsComputer: cardsComputer[0] })
			this.setState({ cardsUser: cardsUser[0] })
		}
		if (cardsComputer.length === 0) {
			this.setState({ page })
		}
		console.log(cardsUser === this.cardsUser)
		console.log(cardsComputer)
		console.log(cardsUser)
	}

	changeName = (name) => {
		this.setState({ name })
	}

	changePage = (page) => {
		this.setState({ page })
		if (!this.state.cardsComputer || !this.state.cardsUser || !this.state.cardsComputer.length === 0 || this.state.cardsUser.length === 0) {
			this.setState({ cardsComputer: getCardsComputer()})
			this.setState({ cardsUser: getCardsUser()})
			this.setState({ cardsComputer: cardsComputer[0] })
			this.setState({ cardsUser: cardsUser[0] })
		}
	}

	render() {
		switch (this.state.page) {
			case game:
				return <Game changePage={this.changePage} name={this.state.name}
					changeCard={this.changeCard} cardsComputer={this.state.cardsComputer}
					cardsUser={this.state.cardsUser} />;
			case result:
				return <Result changePage={this.changePage} />;
			default:
				return <Start changePage={this.changePage} changeName={this.changeName} />;
		}
	}
}

export default App;
