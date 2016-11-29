import React from 'react'
import { connect } from 'react-redux'
import { addproduct, decrease } from '../../actions/product'

import { Link } from 'react-router'

class TableListProduct extends React.Component {
	render () {
		return (
			<div>
		    	<Link to={`/product/add`}>
		    		<button className="btn btn-primary">Add Product</button>
		    	</Link>
		    	<Link to={`/`}>Home</Link>
		    	<table className="table">
			    	<thead>
			          <tr>
			            <th>Code</th>
			            <th>Name</th>
			            <th>Category</th>
			          </tr>
			        </thead>
		    		<tbody>
			    		{this.props.todos.map(t => {
			    			return (<tr key={t._id}>
			    					<td>{t.code}</td>
			    					<td>{t.name}</td>
			    					<td>{t.name}</td>
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
  { addproduct }
)(TableListProduct)