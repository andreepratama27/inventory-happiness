import React from 'react'
import { connect } from 'react-redux'
import { addproduct, decrease, deleteProduct } from '../../actions/product'
import moment from 'moment'
import axios from 'axios'

import { Link } from 'react-router'

class TableListProduct extends React.Component {

	constructor(props) {
		super(props)
	}
	nipeharefa(t) {

		const id = t._id

		axios.delete('api/product/' + id).then((result) => {
  			
			this.props.deleteProduct(t);

  		})


	}
	render () {
		const formatTanggal = x => {
			console.log(x)
			return moment(x,moment.ISO_8601).format('DD MMM YYYY H:m:s')
		}

		const hapus = x => {

			console.log(x)
		}
		return (
			<div>
		    	<Link to={`/product/add`}>
		    		<button className="btn btn-primary no-border">Add Product</button>
		    	</Link>
		    	<Link to={`/`}>Home</Link>


		    	<table className="list-products">
			    	<thead>
			          <tr>
			            <th>Code</th>
			            <th>Name</th>
			            <th>Category</th>
			            <th>Quantity</th>
			            <th>Last Update</th>
			            <th></th>
			            <th></th>
			          </tr>
			        </thead>
		    		<tbody>
			    		{this.props.todos.map(t => {
			    			return (<tr key={t._id}>
			    					<td>{t.code}</td>
			    					<td>{t.name}</td>
			    					<td>{t.name}</td>
			    					<td>0</td>
			    					<td>{formatTanggal(t.created_at)}</td>
			    					<td>Edit</td>
			    					<td>
			    						<button className="antd-button-danger" 
			    						onClick={this.nipeharefa.bind(this, t)}>Delete</button>
			    					</td>
			    				</tr>)
			    		})}
		    		</tbody>
		    	</table>
		    </div>
		)
	}
}


export default connect(
  state => ({ todos: state.product }),
  { addproduct, deleteProduct }
)(TableListProduct)