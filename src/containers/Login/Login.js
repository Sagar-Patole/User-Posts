import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actionCreators from '../../store/Actions/index';
import './Login.css';

class Login extends Component {
  state = {
    email: '',
    password: '',
    error: false,
  };

  loginHandler(event) {
    event.preventDefault();
    this.props.users.forEach(el => {
      if (
        el.email === this.state.email &&
        el.username === this.state.password
      ) {
        this.props.onLogin();
        return;
      }
    });
    this.setState({ error: true });
  }

  render() {
    let redirect = null;
    if (this.props.auth) {
      redirect = <Redirect to="/home" />;
    }

    let err = null;
    if (this.state.error) {
      err = <p>Email Id or Password is incorrect.</p>;
    }

    return (
      <div className="Login">
        {redirect}
        <form onSubmit={this.loginHandler.bind(this)}>
          <div className="form-group">
            <label htmlFor="emailId">Email ID</label>
            <input
              type="email"
              id="emailId"
              className="form-control"
              onChange={event => this.setState({ email: event.target.value })}
              value={this.state.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              onChange={event =>
                this.setState({ password: event.target.value })
              }
              value={this.state.password}
            />
            <div className="Error">{err}</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth.authenticated,
    users: state.users.users,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: () => dispatch(actionCreators.login()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
