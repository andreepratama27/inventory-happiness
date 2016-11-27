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
					<input type="text" placeholder="Code" className="form-control" 
						value={this.state.code} 
						onChange={this.handleCodeChange.bind(this)}/>
				</div>
				<div className="form-group">
					<input type="text" placeholder="Product Name" 
					className="form-control" value={this.state.name}
					onChange={this.handleNameChange.bind(this)}/>
				</div>
				<div className="form-group">
					<input type="text" className="form-control" placeholder="Quantity"
					value={this.state.quantity}
					onChange={this.handleQuantityChange.bind(this)}/>
				</div>

				<div className="form-group">
					<label htmlFor="input" className="col-sm-2 control-label">Category</label>
					<div className="col-sm-2">
						<select name="" id="input" className="form-control"
							onChange={this.handleCategoryChange.bind(this)}>
							<option value=""></option>
							<option value="1100">Food</option>
						</select>
					</div>
				</div>

				<div className="form-group">
					<textarea className="form-control" placeholder="Note"
						onChange={this.handleNoteChange.bind(this)}></textarea>
				</div>

				<div className="form-group">
					<button type="button" className="btn btn-info"
						onClick={this.handleSubmit.bind(this)}>button</button>
					<Link to={`/product`}>
						<button type="button" className="btn btn-warning">Kembali</button>
					</Link>
				</div>

			</div>
		)
	}
}

export default connect(state => ({ user: state }), { addproduct })(AddForm);