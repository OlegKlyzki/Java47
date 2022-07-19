import React from 'react'
import { personNameData } from '../Utils/constants'
import AboutMeContent from './AboutMeContent'
import { base_url } from '../Utils/constants'
import Spinner from './Spinner'
import style from '../css_modules/aboutMe.module.css'

class AboutMe extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isLoading: true,
		}
	}

	componentDidMount() {
		fetch(`${base_url}v1/peoples/1`)
			.then(response => response.json())
			.then(data => {
				this.setState({
					isLoading: false,
					personData: [
						data.name,
						data.id,
						data.gender,
						data.skin_color,
						data.hair_color,
						data.eye_color,
						data.height,
						data.mass,
						data.birth_year
					],
					imgUrl: `${base_url}/${data.image}`
				})
			})
	}



	render() {
		if (this.state.isLoading) {
			return (
				<Spinner />
			)
		} else {
			return (
				<div className="container">
					<div className="row">
						<ul className={`col-8 offset-2 pt-2 mb-2 ${style.ul_list}`}>
							{personNameData.map((item, index) =>
								<AboutMeContent key={index} itemName={item} itemValue={this.state.personData[index]} />)}
							<AboutMeContent key={this.state.imgUrl} personImg={this.state.imgUrl} />
						</ul>
					</div>
				</div>
			)
		}
	}
}

export default AboutMe