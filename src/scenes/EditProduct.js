import React from 'react'
import Navbar from '../components/Global/Navbar'
import EditForm from '../components/Product/Form/Edit'

export default class AddProduct extends React.Component{

	render(){

		return (
			<div>
				<Navbar />
				<div className="container">
					<div className="col-md-6">
						<EditForm id={this.props.params.id}/>
					</div>
				</div>
			</div>
		)
	}
}