import * as actionTypes from '../Actions/ActionTypes';

const initialState = {
  users: null,
  error: false,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USERS:
      return {
        ...state,
        users: action.userList,
      };
    case actionTypes.FETCH_USERS_FAILED:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export default UserReducer;
