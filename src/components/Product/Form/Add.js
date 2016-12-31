import React from 'react'
import axios from 'axios'
import { Link } from 'react-router'
import { connect } from 'react-redux';
import { withRouter, browserHistory } from 'react-router';

import { addproduct } from 'actions/product'

class AddForm extends React.Component {

	constructor() {
		super()
		this.state = {
			code: '',
			name:'',
			quantity: 0,
			note: '',
			category: 0,
		}
	}

	handleCodeChange(e) {
		this.setState({code: e.target.value})
	}
	handleNameChange(e) {
		this.setState({name: e.target.value})
	}
	handleQuantityChange(e) {
		this.setState({quantity: e.target.value})
	}
	handleNoteChange(e) {
		this.setState({note: e.target.value})
	}
	handleCategoryChange(e) {
		this.setState({category: e.target.value })
	}
	handleSubmit(){
		console.log("asdfkasjf")
		const res = {
			id: Math.random(),
			code: this.state.code,
			name: this.state.name
		}
		
		this.props.addproduct(res)
		browserHistory.push('/product')

		axios.post('/api/product', res)
			.then((result) => {
				console.log(result)
			})
	}
	render(){

		return (
			<div className="formAddProduct">
				<div className="form-group">
					<label>Kode Produk</label>
					<input type="text" placeholder="0123456789" className="form-control no-border" 
						value={this.state.code} 
						onChange={this.handleCodeChange.bind(this)}/>
				</div>
				<div className="form-group">
					<label>Nama Produk</label>
					<input type="text" placeholder="Remote Lorem Foo" 
					className="form-control no-border" value={this.state.name}
					onChange={this.handleNameChange.bind(this)}/>
				</div>
				<div className="form-group">
					<label>Quantity</label>
					<input type="text" className="form-control no-border" placeholder="1"
					value={this.state.quantity}
					onChange={this.handleQuantityChange.bind(this)}/>
				</div>

				<div className="form-group">
					<label>Category</label>
					<select name="" id="input" className="form-control no-border"
						onChange={this.handleCategoryChange.bind(this)}>
						<option value="">Pilih Kategori</option>
						<option value="1100">Food</option>
					</select>
				</div>

				<div className="form-group">
					<label>Catatan</label>
					<textarea className="form-control no-border" placeholder="Note"
						onChange={this.handleNoteChange.bind(this)}></textarea>
				</div>

				<div className="form-group">
					<button type="button" className="btn btn-info"
						onClick={this.handleSubmit.bind(this)}>Tambah</button>
					<Link to={`/product`}>
						<button type="button" className="btn btn-warning">Kembali</button>
					</Link>
				</div>

			</div>
		)
	}
}

export default connect(state => ({ user: state }), { addproduct })(AddForm);