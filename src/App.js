import React, { Component } from 'react';
import './App.css';
import Layouts from './components/layout'
import Login from './components/login'
import Distributor from './distributor/index'
import Routes from './routes/routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes/>
      </div>
    );
  }
}

export default App;
