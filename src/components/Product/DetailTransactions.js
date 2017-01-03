import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import { List } from 'immutable'

class DetailTransactions extends React.Component {

	constructor(props) {
		super(props)

		let data = this.props.product

		let transaksi = this.props.transaksi

		let id = this.props.id

		var product = data.find(obj => {

			return obj._id === id

		})

		var trans = transaksi.filter(x => x.product._id  === id)
		this.state = {

			product,
			trans
		}
	}
	render() {

		const formatTanggal = x => {
			return moment(x,moment.ISO_8601).format('DD MMM YYYY H:m:s')
		}

		const urutkan = () => {

			var newOrderedMap = List(this.state.trans);
			var olderClients = newOrderedMap.sortBy(function(value, key) {  
			    return -moment(value.created_at,moment.ISO_8601).unix();
			});

			return olderClients
		}


		return (

				<div>
					<div className="info-product">

						<h2>{this.state.product.name}</h2>

						<strong>Supplier : {this.state.product.supplier.name}</strong>

						<p>Created : {formatTanggal(this.state.product.created_at)}</p>

						<hr />

					</div>

					<div>
						
						<strong>Riwwayat Transaksi</strong>

						<span className="stock-out"></span>

					</div>

					<div>

						<table className="list-products">
					    	<thead>
					          <tr>
					            <th>Kode</th>
					            <th>Product</th>
					            <th>Supplier</th>
					            <th>Tipe</th>
					            <th>Q</th>
					          </tr>
					        </thead>
				    		<tbody>
				    			{urutkan().map( t => {
				    				return (
				    					<tr key={t._id}>
				    						<td>{t.code}</td>
				    						<td>{t.product.name}</td>
				    						<td>{t.supplier.name}</td>
				    						<td>{t.type === 1 ? "Barang Masuk" : "Barang Keluar"}</td>
				    						<td className="quantityField">
				    							<span className={t.type === 1 ? "stock-in" : "stock-out" }>
				    								{t.quantity}
				    							</span>
				    						</td>
				    					</tr>
				    				)
				    			})}
				    		</tbody>
				    	</table>

					</div>
				</div>
			)
	}
}


export default connect(
  state => ({ product: state.product, supplier: state.suppliers,
  transaksi: state.transaksi }),
  {   }
)(DetailTransactions)