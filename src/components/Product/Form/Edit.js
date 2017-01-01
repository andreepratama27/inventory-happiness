import React from 'react'
import axios from 'axios'
import { Link } from 'react-router'
import { connect } from 'react-redux';
import { withRouter, browserHistory } from 'react-router';

import { addproduct } from 'actions/product'

class EditForm extends React.Component {

	constructor(props) {

		super(props)

		let data = this.props.todos

		const id = this.props.id
		
		var res = data.find(obj => {

			return obj._id === id

		})

		this.state = res

	}

	handleCodeChange(e) {
		this.setState({code: e.target.value})
	}
	handleNameChange(e) {
		this.setState({name: e.target.value})
	}

	updateData() {

		const res = this.state
		axios.put('/api/product/' + res._id, res)
		.then((result) => {
			browserHistory.push('/product')
		})
	}
	
	render() {

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
					<button type="button" className="btn btn-info" onClick={this.updateData.bind(this)}>Simpan</button>
					<Link to={`/product`}>
						<button type="button" className="btn btn-warning">Kembali</button>
					</Link>
				</div>

			</div>
		)
	}	
}
	
export default connect(state => ({ todos: state.product }), { addproduct })(EditForm);