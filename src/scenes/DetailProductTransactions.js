import React from 'react'
import Navbar from '../components/Global/Navbar'

import DetailTransactions from '../components/Product/DetailTransactions'

export default class DetailProductTransactions extends React.Component {


	render(){

		return (
			<div>
				<Navbar />
				<div className="container">

					<div className="col-md-6">
						<DetailTransactions id={this.props.params.id}/>
					</div>
				</div>
			</div>
		)
	}
}