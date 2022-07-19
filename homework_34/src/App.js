import React from 'react'
import './App.css';
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Main from './Components/Main.jsx'
import { navItems } from './Utils/constants.jsx'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			currentPage: navItems[0]
		}
	}

	changePage = (currentPage) => {
		this.setState({currentPage})
	}

	render() {
		return (
			<div className="container-fluid">
				<Header changePage={this.changePage}/>
				<Main currentPage={this.state.currentPage}/>
				<Footer />
			</div>
		)
	}
	
}

export default App;
