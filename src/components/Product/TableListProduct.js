import React from 'react'
import { connect } from 'react-redux'
import { addproduct, decrease } from '../../actions/product'

import { Link } from 'react-router'

function Home({ todos, addproduct, decrease }){
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
		          </tr>
		        </thead>
	    		<tbody>
		    		{todos.map(t => (
			          <tr key={t}>
			          	<td>{t.get('code')}</td>
			          	<td>{t.get('name')}</td>
			          </tr>
			        ))}
	    		</tbody>
	    	</table>
	    </div>
  	)
}


export default connect(
  state => ({ todos: state.product }),
  { addproduct }
)(Home)