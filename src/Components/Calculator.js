import { Component } from 'react';
import './Calculator.css';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <div className="result">0</div>
        <div className="row">
          <button type="button">AC</button>
          <button type="button">+/-</button>
          <button type="button">%</button>
          <button type="button" className="operations">/</button>
        </div>
        <div className="row">
          <button type="button">7</button>
          <button type="button">8</button>
          <button type="button">9</button>
          <button type="button" className="operations">*</button>
        </div>
        <div className="row">
          <button type="button">4</button>
          <button type="button">5</button>
          <button type="button">6</button>
          <button type="button" className="operations">-</button>
        </div>
        <div className="row">
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button" className="operations">+</button>
        </div>
        <div className="row">
          <button type="button" className="last-btn">0</button>
          <button type="button">.</button>
          <button type="button" className="operations">=</button>
        </div>
      </div>
    );
  }
}
