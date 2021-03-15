import axios from 'axios';
import * as actionTypes from '../ActionTypes';

export const fetchUsers = userList => {
  return {
    type: actionTypes.FETCH_USERS,
    userList: userList,
  };
};

export const fetchUsersFailed = () => {
  return {
    type: actionTypes.FETCH_USERS_FAILED,
  };
};

export const initUsers = () => {
  return dispatch => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        dispatch(fetchUsers(response.data));
      })
      .catch(error => {
        dispatch(fetchUsersFailed());
      });
  };
};
