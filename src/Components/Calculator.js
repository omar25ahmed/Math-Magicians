import { Component } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator">
        <div className="result">
          {total}
          {operation}
          {next}
        </div>
        <div className="row">
          <button onClick={this.clickHandler} type="button">
            AC
          </button>
          <button onClick={this.clickHandler} type="button">
            +/-
          </button>
          <button onClick={this.clickHandler} type="button">
            %
          </button>
          <button onClick={this.clickHandler} type="button" className="operations">
            ÷
          </button>
        </div>
        <div className="row">
          <button onClick={this.clickHandler} type="button">
            7
          </button>
          <button onClick={this.clickHandler} type="button">
            8
          </button>
          <button onClick={this.clickHandler} type="button">
            9
          </button>
          <button onClick={this.clickHandler} type="button" className="operations">
            x
          </button>
        </div>
        <div className="row">
          <button onClick={this.clickHandler} type="button">
            4
          </button>
          <button onClick={this.clickHandler} type="button">
            5
          </button>
          <button onClick={this.clickHandler} type="button">
            6
          </button>
          <button onClick={this.clickHandler} type="button" className="operations">
            -
          </button>
        </div>
        <div className="row">
          <button onClick={this.clickHandler} type="button">
            1
          </button>
          <button onClick={this.clickHandler} type="button">
            2
          </button>
          <button onClick={this.clickHandler} type="button">
            3
          </button>
          <button onClick={this.clickHandler} type="button" className="operations">
            +
          </button>
        </div>
        <div className="row">
          <button onClick={this.clickHandler} type="button" className="last-btn">
            0
          </button>
          <button onClick={this.clickHandler} type="button">
            .
          </button>
          <button onClick={this.clickHandler} type="button" className="operations">
            =
          </button>
        </div>
      </div>
    );
  }
}
