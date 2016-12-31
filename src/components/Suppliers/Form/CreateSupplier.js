import React from 'react'



export default class CreateSupplier extends React.Component {


	constructor() {
		super()
		this.state = {
			code: '',
			name:'',
			alamat: '',
			phone: ''
		}
	}

	handleCodeChange(e) {
		this.setState({code: e.target.value})
	}
	handleNameChange(e) {
		this.setState({name: e.target.value})
	}

	handleAlamatChange(e) {
		this.setState({alamat: e.target.value})
	}

	handlePhoneChange(e) {
		this.setState({phone: e.target.value})
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
						<input type="text" placeholder="PT Kereta API" className="form-control no-border" 
							value={this.state.name} 
							onChange={this.handleNameChange.bind(this)}/>
					</div>


					<div className="form-group">
						<label>Alamat</label>
						<input type="text" placeholder="Jl. Thamrin No.33" className="form-control no-border" 
							value={this.state.alamat} 
							onChange={this.handleAlamatChange.bind(this)}/>
					</div>

					<div className="form-group">
						<label>Phone</label>
						<input type="text" placeholder="+628xxxxxx" className="form-control no-border" 
							value={this.state.phone} 
							onChange={this.handlePhoneChange.bind(this)}/>
					</div>

					<div className="form-group">
						<button type="button" className="btn btn-primary no-border">Simpan</button>
					</div>

				</div>
			)
	}
}