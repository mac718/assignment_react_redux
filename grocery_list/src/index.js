import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';

import {createStore} from 'redux';
import {groceryListApp} from './reducers';
//import {addItem, purchaseItem, setPurchasedFilter} from './actions';

const listItems = [
  {
    name: 'bananas',
    purchased: false,
    price: '$.65',
    category: 'fruit/veg',
    id: 1
  },
  {
    name: 'chicken',
    purchased: false,
    price: '$2.40',
    category: 'meat',
    id: 2

  },
  {
    name: 'booze',
    purchased: false,
    price: '$40',
    category: 'booze',
    id: 3
  }
]

const store = createStore(groceryListApp, {
  list: listItems
});

// let unsubscribe = store.subscribe(() => {
//   console.log(store.getState());
// })

// console.log("Initial state", store.getState());

// store.dispatch(addItem({
//   name: 'milk',
//   price: '$4.00',
//   catgory: 'dairy',
//   purchased: false
// }))

// store.dispatch(purchaseItem(1))

// store.dispatch(setPurchasedFilter('SHOW_PURCHASED'))

// unsubscribe();


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
