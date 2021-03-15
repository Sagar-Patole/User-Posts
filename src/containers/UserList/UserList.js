import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from '../../components/User/User';
import './UserList.css';

class Users extends Component {
  state = {
    input: '',
  };

  render() {
    let userList = null;
    if (this.props.users) {
      userList = this.props.users
        .filter(user => {
          if (this.state.input === '') return user;
          else if (
            user.name.toLowerCase().startsWith(this.state.input.toLowerCase())
          )
            return user;
        })
        .map(user => {
          return (
            <User
              key={user.id}
              style={{ textAlign: 'center' }}
              userId={user.id}
              name={user.name}
              username={user.username}
              email={user.email}
            />
          );
        });
    }
    return (
      <div className="UserList">
        <div>
          <label htmlFor="name">Search By Name : </label>
          <input
            type="text"
            id="name"
            placeholder="Search By Name"
            onChange={event => {
              this.setState({ input: event.target.value });
            }}
            value={this.state.input}
          />
        </div>
        <table className="table table-bordered">
          <thead className="thead-light ">
            <tr>
              <th scope="col">User ID</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>{userList}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.users,
    error: state.users.error,
  };
};

export default connect(mapStateToProps)(Users);
