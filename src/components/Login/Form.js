import React from 'react'
import axios from 'axios'


export default class LoginForm extends React.Component {
	constructor() {
    	super();
    	this.state = { email: 'Seasdt Stas' , 'password': ''};
  	}
  	handleEmailChange(event){
  		this.setState({email: event.target.value})
  	}
  	handlePasswordChange(event){
  		this.setState({password: event.target.value})
  	}
  	handleLogin(event){
  		console.log(this.state)
  		axios.post('/api/login', [], [{Accept: 'application/json'}]).then((success) => {

  		}).catch((err) => {
  			console.info(err)
  		})
  	}
	render() {
		return (
				<div className="formLogin">
					<div className="form-group">
						<input type="email" placeholder="Email Address" 
							className="form-control"
							value={this.state.email}
							onChange={this.handleEmailChange.bind(this)}/>
					</div>

					<div className="form-group">
						<input type="password" placeholder="Password"
							className="form-control"
							onChange={this.handlePasswordChange.bind(this)}/>
					</div>

					<div className="form-group">
						<button type="button" className="btn btn-primary" 
						onClick={this.handleLogin.bind(this)}>Login</button>
					</div>
				</div>
			)
	}
}