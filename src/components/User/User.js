import React from 'react';

const User = props => {
  return (
    <tr>
      <th style={props.style}>{props.userId}</th>
      <td>{props.name}</td>
      <td>{props.username}</td>
      <td>{props.email}</td>
    </tr>
  );
};

export default User;
