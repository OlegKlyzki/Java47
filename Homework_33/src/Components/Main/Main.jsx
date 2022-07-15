import React from 'react'
import MainContent from './MainContent'
import { images } from '../../Utils/Constants'

class Main extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			fullscreen: false,
			imageIndex: undefined
		}
	}

	handleClick = (index) => {
		this.setState({fullscreen: !this.state.fullscreen})
		this.setState({imageIndex: index})
	}

	render() {
		return (
			<section className="container">
				<div className="row vh-100">
					<div className="d-flex justify-content-center align-items-center">
						<div className="vw-100 d-flex flex-wrap justify-content-center shadow-lg p-5 bg-primary bg-opacity-50 rounded">
							{images.map((item, index) => !this.state.fullscreen && <MainContent fullscreen={this.handleClick} 
																								boolean={this.state.fullscreen}
																								key={index} index={index} 
																								image={item} />)}
							{this.state.fullscreen && <MainContent image={images[this.state.imageIndex]} fullscreen={this.handleClick}
																	key={this.state.imageIndex} boolean={this.state.fullscreen}
																	/>}	
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Main