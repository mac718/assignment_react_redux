import React, { Component } from 'react';
import './App.css';
import JumbotronFluid from './components/elements/JumbotronFluid'
import AccountsContainer from './containers/AccountsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <JumbotronFluid heading='Bank'/>
        <AccountsContainer />
      </div>
    );
  }
}

export default App;
