import React from 'react'
import { connect } from 'react-redux'
//import { addproduct, decrease, deleteProduct } from '../../actions/product'
import moment from 'moment'
import axios from 'axios'

import { Link } from 'react-router'

class ListSuppliers extends React.Component {

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
			return moment(x,moment.ISO_8601).format('DD MMM YYYY H:m:s')
		}
		return (
			<div>
		    	<Link to={`/suppliers/create`}>
		    		<button className="btn btn-primary no-border">Add Suppliers</button>
		    	</Link>

		    	<table className="list-products">
			    	<thead>
			          <tr>
			            <th>Code</th>
			            <th>Name</th>
			            <th>Created At</th>
			          </tr>
			        </thead>
		    		<tbody>
			    		{this.props.todos.map(t => {
			    			return (<tr key={t._id}>
			    					<td>{t.code}</td>
			    					<td>{t.name}</td>
			    					<td>{formatTanggal(t.created_at)}</td>
			    				</tr>)
			    		})}
		    		</tbody>
		    	</table>
		    </div>
		)
	}
}


export default connect(
  state => ({ todos: state.suppliers }),
  {}
)(ListSuppliers)