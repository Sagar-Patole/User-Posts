import * as actionTypes from '../ActionTypes';

export const login = () => {
  return {
    type: actionTypes.LOGIN,
  };
};

export const logout = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};
