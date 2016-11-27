/* eslint-disable class-methods-use-this, no-useless-constructor, no-console*/
import React from 'react';

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = { email: 'Seasdt Stas' };
  }
  handleChange(event) {
    this.setState({ email: event.target.value });
  }
  onLoginClick() {
    console.log('sadfasd');
  }
  render() {
    return (
      <div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Email" onChange={this.handleChange.bind(this)}/>
        </div>

        <div className="form-group">
          <input type="password" className="form-control" placeholder="Password"/>
        </div>

        <div className="form-group">
          <button type="button" className="btn btn-primary" onClick={this.onLoginClick}>Login</button>
        </div>
    </div>);
  }
}
