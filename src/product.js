import React from 'react'

import TableListProduct from './components/Product/TableListProduct'


export default class Product extends React.Component {
	constructor() {
    	super();
  	}
	render() {
		
		return (
			<div className="container">
				<div className="listProduct">
					<TableListProduct />
				</div>
			</div>
		)
	}
}