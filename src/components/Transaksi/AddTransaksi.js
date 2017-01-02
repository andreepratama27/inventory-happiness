import React from 'react'
import axios from 'axios'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import moment from 'moment'
import { List, Map } from 'immutable';


import { addTransaksi as tambahTransaksi } from 'actions/transaksi'


class AddTransaksi extends React.Component {

	constructor(props){

		super(props)

		this.state = {

			name: '',
			quantity: 0,
			tipe: 0,
			supplier: 0,
			note: ''
		}

	}

	handleSupplierChange(e) {

		this.setState({supplier: e.target.value})
	}

	handleQuantityChange(e) {

		this.setState({quantity: e.target.value})

	}

	handleTipeChange(e) {

		this.setState({tipe: e.target.value})
	}

	handleNameChange(e) {

		this.setState({name: e.target.value})		
	}

	handleNoteChange(e) {

		this.setState({note: e.target.value})

	}

	saveTransaksi(e) {

		const data = {
			type: parseInt(this.state.tipe),
			quantity: parseInt(this.state.quantity),
			note: this.state.note,
			product: this.state.name,
			supplier: this.state.supplier
		}

		const self = this
		axios.post('/api/transaction', data).then(x => {
			console.log(Map(x.data.transaksi))

			self.props.tambahTransaksi(x.data.transaksi)
		})

	}

	render () {

		const check = () => {

			let id = this.state.name
			let data = this.props.product
			let stateQuantity = parseInt(this.state.quantity)
			let tipe = this.state.tipe

			if (id !== "" && tipe === "2" && stateQuantity > 0) {


				var res = data.find(obj => {

					return obj._id === id

				})


				if (stateQuantity > res.quantity) {

					return "notifError displayNotification"
				}

				return "notifError hideNotification"

			}
			return "notifError hideNotification"
		}

		return (

			<div className="formAddProduct">

					<div className="form-group">
						<label>Nama Produk</label>
						<select id="input" className="form-control no-border" required="required"
							onChange={this.handleNameChange.bind(this)}
							value={this.state.name}>
							<option value="">Pilih Produk</option>
							{this.props.product.map( t => {

								return (
									<option value={t._id} key={t._id} className={t.quantity < 20 ? "warn-stock" : ""}>{t.name}</option>
								)
							})}
						</select>
					</div>

					<div className="form-group">
						<label>Quantity</label>
						<input type="text" placeholder="0" className="form-control no-border"
							value={this.state.quantity}
							onChange={this.handleQuantityChange.bind(this)} />
						<p className={check()}>Melebihi Stock yang ada</p>
					</div>

					<div className="form-group">
						<label>Tipe</label>
						<select className="form-control" required="required"
							onChange={this.handleTipeChange.bind(this)}
							value={this.state.tipe}>
							<option value="">Pilih Tipe</option>
							<option value="1">Barang Masuk</option>
							<option value="2">Barang Keluar</option>
						</select>
					</div>


					<div className="form-group">
						<label>Supplier</label>
						<select id="input" className="form-control no-border" required="required"
							value={this.state.supplier}
							onChange={this.handleSupplierChange.bind(this)}>
							<option value="">Pilih Supplier</option>
							{this.props.supplier.map( t => {

								return (
									<option value={t._id} key={t._id}>{t.name}</option>
								)
							})}
						</select>
					</div>

					<div className="form-group">

						<label>Note</label>

						<textarea className="form-control no-border" placeholder="Note"
						onChange={this.handleNoteChange.bind(this)} 
						value={this.state.note}></textarea>
					</div>

					<div className="form-group">

						<button type="button" className="btn btn-info no-border" onClick={this.saveTransaksi.bind(this)}>Simpan</button>
					</div>



			</div>
		)
	}

}


export default connect(
  state => ({ product: state.product, supplier: state.suppliers }),
  { tambahTransaksi  }
)(AddTransaksi)