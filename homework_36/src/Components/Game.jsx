import React from 'react'
import { result } from '../Utils/Constants'


const Game = ({ name, changeCard, cardsComputer, cardsUser }) => {

	return (
		<div className="container">
			<div>
				<h2>COMPUTER</h2>
				<div>
					{cardsComputer && <p>{cardsComputer.cardSuit}</p>}
					{cardsComputer && <p>{cardsComputer.cardType}</p>}
				</div>
			</div>
			<div>
				<div>
					{cardsUser && <p>{cardsUser.cardSuit}</p>}
					{cardsUser && <p>{cardsUser.cardType}</p>}
				</div>
				<h2>{name}</h2>
				<button onClick={() => changeCard(result)}>Next</button>
			</div>
		</div>
	)
}

export default Game