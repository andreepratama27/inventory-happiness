import React from 'react'
import ReactDOM from 'react-dom'
import LoginForm from './components/Login/Form'


class Login extends React.Component {

	render() {

		return (
			<div className="container">
				<div className="col-offset-md-3 col-md-6">
					<h1>Login</h1>
					<LoginForm />
				</div>
			</div>
		);
	}
}


ReactDOM.render(<Login />, document.querySelector("#app"))