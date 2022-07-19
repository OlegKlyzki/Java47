import React from 'react'

const AboutMeContent = ({ itemName, itemValue, personImg }) => {
	return (
		<ul>
			{!personImg && <li>{itemName}<span>{itemValue}</span></li>}
			{!itemName && <img src={personImg} alt='Luke Skywallker'/>}
		</ul>
	)
}

export default AboutMeContent