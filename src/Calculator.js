import React, {Component} from "react";
import Input from './Input';
import Button from './css/Button.css';
import Forms from './css/Forms.css';

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

    const expected_upside_value = parseInt(expected_upside, 10).toFixed(2);
    const upside_probability_value = parseInt(upside_probability, 10)/100;
    const expected_downside_value = parseInt(expected_downside, 10).toFixed(2);
    const downside_probability_value = parseInt(downside_probability, 10)/100;

    const expectedValueSum = (( expected_upside_value * upside_probability_value ) - ( expected_downside_value * downside_probability_value )).toFixed(2);
    const expectedUpsideSum = (( expected_upside_value * upside_probability_value )).toFixed(2);
    const expectedDownsideSum = (( expected_downside_value * downside_probability_value )).toFixed(2);
    const error = "You need to fill out all the fields";

    if (expected_upside && upside_probability && expected_downside && downside_probability) {
      this.setState({
        expectedUpsideSum,
        expectedDownsideSum,
        expectedValueSum,
        error : ""
      })
    } else {
      this.setState({
        error,
      })
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
    const { expectedValueSum, expectedUpsideSum, expectedDownsideSum, error } = this.state;
    return(
      <React.Fragment>
      <div className="row">
        <div className="col-6">
          <form onSubmit={this.handleSubmit}>
            <Input
              label="Expected upside in £"
              type="number"
              name="expected_upside"
              value={this.state.expected_upside}
              onChange={this.handleChange}
            />
            <Input
              label="Upside probability as a percentage"
              type="number"
              name="upside_probability"
              value={this.state.upside_probability}
              onChange={this.handleChange}
            />
            <Input
              label="Expected downside in £"
              type="number"
              name="expected_downside"
              value={this.state.expected_downside}
              onChange={this.handleChange}
            />
            <Input
              label="Downside probability as a percentage"
              type="number"
              name="downside_probability"
              value={this.state.downside_probability}
              onChange={this.handleChange}
            />
            <div className="col-12">
              <button type="submit">Calculate expected value</button>
            </div>
        </form>
        </div>
        <div className="col-6">
          {expectedUpsideSum ? <p>Your expected <strong>upside</strong> value is £{expectedUpsideSum}</p> : null}
          {expectedDownsideSum ? <p>Your expected <strong>downside</strong> value is £{expectedDownsideSum}</p> : null}
          {expectedValueSum ? <p>Therefore your expected value is <strong>£{expectedValueSum}</strong></p> : null}
          {error ? <strong>{error}</strong> : null}
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default Calculator
