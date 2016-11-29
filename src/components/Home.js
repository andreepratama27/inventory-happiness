import React from 'react'
import { connect } from 'react-redux'

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