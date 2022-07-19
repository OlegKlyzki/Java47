import React from 'react'
import style from '../css_modules/aboutMe.module.css'

const AboutMeContent = ({ itemName, itemValue, personImg }) => {
	return (
		<div className={`d-flex justify-content-between align-items-center`}>
			{!personImg && <li className={`${style.li_list} `}>{itemName}</li>}
			{!personImg && <span className={`${style.span_list} `}>{itemValue}</span>}
			{!itemName && <img className="col-4 offset-4 pb-3" src={personImg} alt='Luke Skywallker'/>}
		</div>
	)
}

export default AboutMeContent