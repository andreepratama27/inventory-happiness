import React from 'react'
import { connect } from 'react-redux'
import TableListSuppliers from '../components/Suppliers/Table/ListSuppliers'
import { List, Map } from 'immutable';
import Navbar from '../components/Global/Navbar'


class ListSuppliers extends React.Component {
	constructor() {
    	super();
  	}
  componentDidMount(){

  }
	render() {
		return (
      <div>
        <Navbar />
  			<div className="container">
  				<div className="listProduct">
  					<TableListSuppliers />
  				</div>
  			</div>

      </div>
		)
	}
}

export default connect(state => ({ user: state.product }), { })(ListSuppliers);