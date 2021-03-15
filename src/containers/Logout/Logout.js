import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/Actions/index';

class Logout extends Component {
  componentDidMount() {
    this.props.onLogout();
  }

  render() {
    let redirect = null;
    if (this.props.auth) {
      redirect = <Redirect to="/login" />;
    }
    return <div>{redirect}</div>;
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth.authenticated,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(actionCreators.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
