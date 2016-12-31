import React from 'react'

import Navbar from '../components/Global/Navbar'

import CreateForm from '../components/Suppliers/Form/CreateSupplier'


export default class AddSuppliers extends React.Component {


	render() {

		return (

				<div>
					<Navbar />

					<div className="container">

						<div className="col-lg-6 col-md-6 col-sm-12">

							<CreateForm />
							
						</div>
					</div>
				</div>
			)
	}
}