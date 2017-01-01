import React from 'react'
import { connect } from 'react-redux'

import Navbar from '../components/Global/Navbar'


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

  				</div>
  			</div>

      </div>
		)
	}
}

export default connect(state => ({ user: state.product }), { })(ListTransaksi);