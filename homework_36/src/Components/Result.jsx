import React from 'react'
import { game } from '../Utils/Constants'
const Result = ({ changePage }) => {
	return (
		<div className="container">
			<div>
				<h2>LOSE/WIN</h2>
			</div>
			<div>
				<p>1-0</p>
			</div>
			<div>
				<button onClick={() => changePage(game)}>Again?</button>
			</div>
		</div>
	)
}

export default Result