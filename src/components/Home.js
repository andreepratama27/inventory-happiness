import React from 'react'
import { connect } from 'react-redux'


/*List Component*/

import Navbar from './GlobalComponents/Navbar'
import HomeSass from '../sass/home.scss'

import $ from 'jquery'

class Home extends React.Component {

	render() {
		console.log(this.props)
		return (
			<div>
				<div className="container">
					
				</div>
			</div>
		)
	}
}


connect(state => ({ todos: state.count }))(Home)

export default Home