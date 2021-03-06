import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import JumbotronFluid from './components//elements/JumbotronFluid';
import ListContainer from './containers/ListContainer';
import AddItemContainer from './containers/AddItemContainer';
import Filters from './components/Filters';

class App extends Component {
  render() {
    return (
      <div className="App">
        <JumbotronFluid heading='Grocery List'/>
        <Filters />
        <ListContainer />
        <AddItemContainer />
      </div>
    );
  }
}

export default App;
