import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/js/dist/collapse';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux'
import { createStore } from 'redux';
import bank from './reducers';
//import { selectAccount, deposit } from './actions';

const accountsArr = [
  {
    name: 'Warren B',
    balance: 87000000000,
    accountNo: 1,
    thing: 'a'
  },
  {
    name: 'Jimbo Jones',
    balance: 25,
    accountNo: 2,
    thing: 'b'
  },
  {
    name: 'Pickle Rick',
    balance: 1000000000000000000,
    accountNo: 3,
    thing: 'c'
  }
]

const store = createStore(bank, {
  accounts: accountsArr
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
