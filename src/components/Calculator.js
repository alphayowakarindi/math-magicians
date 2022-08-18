import React, { useState } from 'react';
import calculate from './logic/calculate';

function Calculator() {
  const [data, setData] = useState({ total: 0, next: null, operation: null });

  const compute = (e) => {
    const result = calculate(data, e.target.textContent);
    setData(result);
  };

  const { total, next, operation } = data;

  return (
    <div className="calculator">
      <div className="calculator-container">
        <div className="output">
          <span>
            {total}
            {operation}
            {next}
          </span>
        </div>
        <button type="button" className="bg-light-grey" onClick={compute}>
          AC
        </button>
        <button type="button" className="bg-light-grey" onClick={compute}>
          +/-
        </button>
        <button type="button" className="bg-light-grey" onClick={compute}>
          %
        </button>
        <button type="button" className="operator" onClick={compute}>
          &#247;
        </button>
        <button type="button" className="bg-light-grey" onClick={compute}>
          7
        </button>
        <button type="button" className="bg-light-grey" onClick={compute}>
          8
        </button>
        <button type="button" className="bg-light-grey" onClick={compute}>
          9
        </button>
        <button type="button" className="operator" onClick={compute}>
          x
        </button>
        <button type="button" className="bg-light-grey" onClick={compute}>
          4
        </button>
        <button type="button" className="bg-light-grey" onClick={compute}>
          5
        </button>
        <button type="button" className="bg-light-grey" onClick={compute}>
          6
        </button>
        <button type="button" className="operator" onClick={compute}>
          -
        </button>
        <button type="button" className="bg-light-grey" onClick={compute}>
          1
        </button>
        <button type="button" className="bg-light-grey" onClick={compute}>
          2
        </button>
        <button type="button" className="bg-light-grey" onClick={compute}>
          3
        </button>
        <button type="button" className="operator" onClick={compute}>
          +
        </button>
        <button
          type="button"
          className="span-2 bg-light-grey"
          onClick={compute}
        >
          0
        </button>
        <button type="button" className="bg-light-grey" onClick={compute}>
          .
        </button>
        <button type="button" className="operator" onClick={compute}>
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
