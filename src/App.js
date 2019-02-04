/*
 * __author__ = 'Anand Singh <sanand926@gmail.com>'
 * __copyright__ = 'Copyright (C) 2019 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React, { Component } from 'react';
import './App.css';
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
