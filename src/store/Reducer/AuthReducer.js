const initialState = {
  authenticated: false,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        authenticated: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        authenticated: false,
      };
    default:
      return state;
  }
};

export default AuthReducer;
