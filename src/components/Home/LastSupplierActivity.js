import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

class LastSupplierActivity extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {

		const formatTanggal = x => {
			return moment(x,moment.ISO_8601).format('DD MMM YYYY H:m:s')
		}

		return (

				<div className="boxActivity">
					<div className="boxTitle">
						<span>Last Update - Supplier</span>
					</div>
					<div className="clearfix"></div>

					<table className="list-products">
						<thead>
				          <tr>
				            <th>Code</th>
				            <th>Name</th>
				            <th>Last Update</th>
				          </tr>
				        </thead>
				        <tbody>
			    		{this.props.suppliers.map(t => {
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
  state => ({ suppliers: state.suppliers }),
  { }
)(LastSupplierActivity)