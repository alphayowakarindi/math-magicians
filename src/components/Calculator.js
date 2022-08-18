import React from 'react';
import calculate from './logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  compute = (e) => {
    this.setState((state) => calculate(state, e.target.innerText));
  };

  render() {
    const { total, next, operation } = this.state;
    let result;
    if (total === null && next === null && operation === null) {
      result = 0;
    }

    if (next !== null && operation !== null && total !== null) {
      result = total + operation + next;
    }

    if (total === null && next === null && operation !== null) {
      this.setState({ total: 0 });
      result = total + operation;
    }

    if (total === null && next !== null && operation === null) {
      result = next;
    }

    if (total !== null && next === null && operation === null) {
      result = total;
    }

    if (total !== null && next === null && operation !== null) {
      result = total + operation;
    }

    if (total !== null && next !== null && operation !== null) {
      result = total + operation + next;
    }

    return (
      <div className="calculator">
        <div className="calculator-container">
          <div className="output">
            <span>{result}</span>
          </div>
          <button
            type="button"
            className="bg-light-grey"
            onClick={this.compute}
          >
            AC
          </button>
          <button
            type="button"
            className="bg-light-grey"
            onClick={this.compute}
          >
            +/-
          </button>
          <button
            type="button"
            className="bg-light-grey"
            onClick={this.compute}
          >
            %
          </button>
          <button type="button" className="operator" onClick={this.compute}>
            &#247;
          </button>
          <button
            type="button"
            className="bg-light-grey"
            onClick={this.compute}
          >
            7
          </button>
          <button
            type="button"
            className="bg-light-grey"
            onClick={this.compute}
          >
            8
          </button>
          <button
            type="button"
            className="bg-light-grey"
            onClick={this.compute}
          >
            9
          </button>
          <button type="button" className="operator" onClick={this.compute}>
            x
          </button>
          <button
            type="button"
            className="bg-light-grey"
            onClick={this.compute}
          >
            4
          </button>
          <button
            type="button"
            className="bg-light-grey"
            onClick={this.compute}
          >
            5
          </button>
          <button
            type="button"
            className="bg-light-grey"
            onClick={this.compute}
          >
            6
          </button>
          <button type="button" className="operator" onClick={this.compute}>
            -
          </button>
          <button
            type="button"
            className="bg-light-grey"
            onClick={this.compute}
          >
            1
          </button>
          <button
            type="button"
            className="bg-light-grey"
            onClick={this.compute}
          >
            2
          </button>
          <button
            type="button"
            className="bg-light-grey"
            onClick={this.compute}
          >
            3
          </button>
          <button type="button" className="operator" onClick={this.compute}>
            +
          </button>
          <button
            type="button"
            className="span-2 bg-light-grey"
            onClick={this.compute}
          >
            0
          </button>
          <button
            type="button"
            className="bg-light-grey"
            onClick={this.compute}
          >
            .
          </button>
          <button type="button" className="operator" onClick={this.compute}>
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
