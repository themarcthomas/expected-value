import React, {Component} from "react";
import Input from './Input';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expected_upside : "",
      upside_probability : "",
      expected_downside : "",
      downside_probability : "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
      event.preventDefault();
      this.expectedValue();
  }

  expectedValue() {
    const { expected_upside, upside_probability, expected_downside, downside_probability } = this.state;

    const expected_upside_value = parseInt(expected_upside, 10);
    const upside_probability_value = parseInt(upside_probability, 10)/100;
    const expected_downside_value = parseInt(expected_downside, 10);
    const downside_probability_value = parseInt(downside_probability, 10)/100;

    const expectedValueSum = ( expected_upside_value * upside_probability_value ) - ( expected_downside_value * downside_probability_value );
    const expectedUpsideSum = ( expected_upside_value * upside_probability_value );
    const expectedDownsideSum = ( expected_downside_value * downside_probability_value );

    this.setState({
      expectedValueSum,
      expectedUpsideSum,
      expectedDownsideSum,
    })
    if (expected_upside && upside_probability && expected_downside && downside_probability) {
      console.log(`( ${expected_upside_value} * ${upside_probability_value} ) - ( ${expected_downside_value} * ${downside_probability_value} ) so your expected value is ${expectedValueSum}`);
    } else {
      console.log("I can't work with infinite probability, dummy")
    }
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  render() {
    const { expectedValueSum, expectedUpsideSum, expectedDownsideSum } = this.state;
    return(
      <React.Fragment>
      <form onSubmit={this.handleSubmit}>
        <Input
          label="Expected Upside in GBP"
          type="number"
          name="expected_upside"
          value={this.state.expected_upside}
          onChange={this.handleChange}
        />
        <Input
          label="Upside Probability"
          type="number"
          name="upside_probability"
          value={this.state.upside_probability}
          onChange={this.handleChange}
        />
        <Input
          label="Expected Downside in GBP"
          type="number"
          name="expected_downside"
          value={this.state.expected_downside}
          onChange={this.handleChange}
        />
        <Input
          label="Downside Probability"
          type="number"
          name="downside_probability"
          value={this.state.downside_probability}
          onChange={this.handleChange}
        />
        <button type="submit">Calculate expected value</button>
      </form>
      {expectedUpsideSum ? <p>Your expected <strong>upside</strong> value is £{expectedUpsideSum}</p> : null}
      {expectedDownsideSum ? <p>Your expected <strong>downside</strong> value is £{expectedDownsideSum}</p> : null}
      {expectedValueSum ? <p>Therefore your expected value is <strong>£{expectedValueSum}</strong></p> : null}
      </React.Fragment>
    );
  }
}

export default Calculator
