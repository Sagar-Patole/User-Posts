import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <br />
        <Link to="/users">Users</Link>
        <br />
        <Link to="/blogs">Blogs</Link>
      </div>
    );
  }
}

export default Home;
