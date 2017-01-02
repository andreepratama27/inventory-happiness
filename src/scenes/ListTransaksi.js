import React from 'react'
import { connect } from 'react-redux'

import Navbar from '../components/Global/Navbar'
import TableTransaksi from '../components/Transaksi/TableTransaksi'


class ListTransaksi extends React.Component {
	constructor() {
    	super();
  }
	render() {
		return (
      <div>
        <Navbar />
  			<div className="container">
  				<div className="listProduct">
            <TableTransaksi />
  				</div>
  			</div>

      </div>
		)
	}
}

export default connect(state => ({ user: state.product }), { })(ListTransaksi);