import React from 'react'
import Headers from '../components/Global/Navbar'
import LastSupplier from '../components/Home/LastSupplierActivity'


export default class Home extends React.Component {

	render() {

		return (
			<div>
				<Headers />
				<div className="container">
					<div className="col-lg-4 col-md-4 col-sm-12">
						<LastSupplier />
					</div>
				</div>
			</div>
		)
	}
}