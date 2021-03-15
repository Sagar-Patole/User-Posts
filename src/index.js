import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import AuthReducer from './store/Reducer/AuthReducer';
import UserReducer from './store/Reducer/UserReducer';
import BlogReducer from './store/Reducer/BlogReducer';

const RootReducer = combineReducers({
  auth: AuthReducer,
  users: UserReducer,
  blogs: BlogReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  RootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
