import React from 'react'
import EditForm from '../components/Product/Form/Edit'

export default class AddProduct extends React.Component{

	render(){

		return (
			<div className="container">
				add Product

				<div className="col-md-6">
					<EditForm id={this.props.params.id}/>
				</div>
			</div>
		)
	}
}