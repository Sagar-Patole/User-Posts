import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as ActionCreators from './store/Actions/index';
import './App.css';
import NavigationItems from './components/Layout/NavigationItems';
import Login from './containers/Login/Login';
import Home from './containers/Home/Home';
import UserList from './containers/UserList/UserList';
import Blogs from './containers/Blogs/Blogs';
import Logout from './containers/Logout/Logout';
import FullBlog from './containers/Blogs/FullBlog/FullBlog';

class App extends Component {
  componentDidMount() {
    this.props.onInitUsers();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavigationItems auth={this.props.auth} />
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/home" exact component={Home} />
            <Route path="/users" component={UserList} />
            <Route path={'/blogs/:id'} exact component={FullBlog} />
            <Route path="/blogs" component={Blogs} />
            <Route path="/logout" exact component={Logout} />
          </Switch>
          <Redirect to="/login" />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth.authenticated,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInitUsers: () => dispatch(ActionCreators.initUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
