import React, { Component } from 'react';
import Calculator from './Calculator';
import Base from './css/Base.css';
import Grid from './css/Grid.css'


class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Expected Value</h1>
          </div>
        </div>
        <Calculator />
      </div>
    );
  }
}

export default App;
