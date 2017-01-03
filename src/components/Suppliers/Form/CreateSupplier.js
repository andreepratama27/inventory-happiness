import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux';

import { createSupplier } from 'actions/suppliers'

class CreateSupplier extends React.Component {


	constructor() {
		super()
		this.state = {
			code: '',
			name:''
		}
	}

	handleCodeChange(e) {
		this.setState({code: e.target.value})
	}
	handleNameChange(e) {
		this.setState({name: e.target.value})
	}

	saveSupplier (e) {

		const data = {
			code: this.state.code,
			name: this.state.name
		}

		const self = this
		axios.post('/api/suppliers', data).then(x => {

			this.props.createSupplier(x.data)
		})
	}



	render () {


		return (
				<div className="formAddProduct">

					<div className="form-group">
						<label>Kode Supplier</label>
						<input type="text" placeholder="KAI" className="form-control no-border" 
							value={this.state.code} 
							onChange={this.handleCodeChange.bind(this)}/>
					</div>


					<div className="form-group">
						<label>Nama</label>
						<input type="text" placeholder="PT Kereta API" 
							className="form-control no-border" 
							value={this.state.name} 
							onChange={this.handleNameChange.bind(this)}/>
					</div>

					<div className="form-group">
						<button type="button" className="btn btn-primary no-border"
							onClick={this.saveSupplier.bind(this)}>Simpan</button>
					</div>

				</div>
			)
	}
}


export default connect(state => ({ suppliers: state.suppliers }), { createSupplier })(CreateSupplier);