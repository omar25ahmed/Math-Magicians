import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [state, setState] = useState({ total: 0, next: null, operation: null });

  function clickHandler(e) {
    setState((state) => calculate(state, e.target.textContent));
  }
  const { total, next, operation } = state;
  return (
    <div className="calculator">
      <div className="result">
        {total}
        {operation}
        {next}
      </div>
      <div className="row">
        <button onClick={clickHandler} type="button">
          AC
        </button>
        <button onClick={clickHandler} type="button">
          +/-
        </button>
        <button onClick={clickHandler} type="button">
          %
        </button>
        <button onClick={clickHandler} type="button" className="operations">
          ÷
        </button>
      </div>
      <div className="row">
        <button onClick={clickHandler} type="button">
          7
        </button>
        <button onClick={clickHandler} type="button">
          8
        </button>
        <button onClick={clickHandler} type="button">
          9
        </button>
        <button onClick={clickHandler} type="button" className="operations">
          x
        </button>
      </div>
      <div className="row">
        <button onClick={clickHandler} type="button">
          4
        </button>
        <button onClick={clickHandler} type="button">
          5
        </button>
        <button onClick={clickHandler} type="button">
          6
        </button>
        <button onClick={clickHandler} type="button" className="operations">
          -
        </button>
      </div>
      <div className="row">
        <button onClick={clickHandler} type="button">
          1
        </button>
        <button onClick={clickHandler} type="button">
          2
        </button>
        <button onClick={clickHandler} type="button">
          3
        </button>
        <button onClick={clickHandler} type="button" className="operations">
          +
        </button>
      </div>
      <div className="row">
        <button onClick={clickHandler} type="button" className="last-btn">
          0
        </button>
        <button onClick={clickHandler} type="button">
          .
        </button>
        <button onClick={clickHandler} type="button" className="operations">
          =
        </button>
      </div>
    </div>
  );
}
