import React from 'react';
import calculate from './logic/calculate';
import operate from './logic/operate';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator">
        <div className="calculator-container">
          <div className="output">
            <span>0</span>
          </div>
          <button type="button" className="bg-light-grey">
            AC
          </button>
          <button type="button" className="bg-light-grey">
            +/-
          </button>
          <button type="button" className="bg-light-grey">
            %
          </button>
          <button type="button" className="operator">
            &#247;
          </button>
          <button type="button" className="bg-light-grey">
            7
          </button>
          <button type="button" className="bg-light-grey">
            8
          </button>
          <button type="button" className="bg-light-grey">
            9
          </button>
          <button type="button" className="operator">
            &times;
          </button>
          <button type="button" className="bg-light-grey">
            4
          </button>
          <button type="button" className="bg-light-grey">
            5
          </button>
          <button type="button" className="bg-light-grey">
            6
          </button>
          <button type="button" className="operator">
            -
          </button>
          <button type="button" className="bg-light-grey">
            1
          </button>
          <button type="button" className="bg-light-grey">
            2
          </button>
          <button type="button" className="bg-light-grey">
            3
          </button>
          <button type="button" className="operator">
            +
          </button>
          <button type="button" className="span-2 bg-light-grey">
            0
          </button>
          <button type="button" className="bg-light-grey">
            .
          </button>
          <button type="button" className="operator">
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
