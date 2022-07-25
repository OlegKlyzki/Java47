import React from 'react'
import { result } from '../Utils/Constants'


const Game = ({ name, changeCard, cardsComputer, cardsUser }) => {

	return (
		<div className="container">
			<div>
				<h2>COMPUTER</h2>
				<div>
					<p>{cardsComputer.cardSuit}</p>
					<p>{cardsComputer.cardType}</p>
				</div>
			</div>
			<div>
				<div>
					<p>{cardsUser.cardSuit}</p>
					<p>{cardsUser.cardType}</p>
				</div>
				<h2>{name}</h2>
				<button onClick={() => changeCard(result)}>Next</button>
			</div>
		</div>
	)
}

export default Game