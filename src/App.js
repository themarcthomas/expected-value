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
        <div className="row">
          <div className="col-12">
            <small>Disclaimer: This is a calculator, not my advice. Use your own judgement. Take responsbility for your own choices.</small>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
