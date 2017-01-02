import React from 'react'
import AddForm from '../components/Product/Form/Add'
import Navbar from '../components/Global/Navbar'

export default class AddProduct extends React.Component{

	render(){

		return (
			<div>
				<Navbar />
				<div className="container">

					<div className="col-md-6">
						<AddForm />
					</div>
				</div>
			</div>
		)
	}
}