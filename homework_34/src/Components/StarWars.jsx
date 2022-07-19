import React from 'react'
import style from '../css_modules/farGalaxy.module.css'
import { starWarsInfo } from '../Utils/constants'
const StarWars = () => {
	return (
		<div>
			<p className={style.farGalaxy}>{starWarsInfo}</p>
		</div>
	)
}

export default StarWars