import React from 'react'
import style from './image.module.css'

const MainContent = ({ image, fullscreen, index, boolean }) => {
	let imgScreen = 'img m-3';
	if (boolean) {
		 imgScreen = style.img_fullscreen
	} else {
		imgScreen = 'img m-3';
	}
	return (
		<img onClick={() => fullscreen(index)} className={imgScreen} src={image} alt="friend" />
	)
}

export default MainContent