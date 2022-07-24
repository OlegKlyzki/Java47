import React from 'react'
import { result } from '../Utils/Constants'
const Game = ({ changePage, name }) => {
	return (
		<div className="container">
			<div>
				<h2>COMPUTER</h2>
				<div>
					<p>4</p>
				</div>
			</div>
			<div>
				<div>
					<p>5</p>
				</div>
				<h2>{name}</h2>
				<button onClick={() => changePage(result)}>Next</button>
			</div>
		</div>
	)
}

export default Game