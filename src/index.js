import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import Reducers from './reducers';
import reduxthunk from 'redux-thunk'
import './index.css'

const store = createStore(Reducers, applyMiddleware(reduxthunk))
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider >
  , document.getElementById('root')
);