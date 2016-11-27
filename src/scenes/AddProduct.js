import React from 'react'
import AddForm from '../components/Product/Form/Add'

export default class AddProduct extends React.Component{

	render(){

		return (
			<div className="container">
				add Product

				<div className="col-md-6">
					<AddForm />
				</div>
			</div>
		)
	}
}