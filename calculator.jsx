import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: "",
      num2: "",
      result: 0
    }
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.clear = this.clear.bind(this);
  }

  // your code here

  setNum1(event){
    this.setState({num1: parseInt(event.target.value)})
  }

  setNum2(event){
    this.setState({num2: parseInt(event.target.value)})
  }

  add(e){
    e.preventDefault();
    this.setState({result: this.state.num1 + this.state.num2})
  }

  subtract(e){
    e.preventDefault();
    this.setState({result: this.state.num1 - this.state.num2})
  }

  clear(e){
    e.preventDefault();
    this.setState({num1: "", num2: "", result: 0})
  }

  render() {
    const { num1, num2, result } = this.state; 
    return (
      <div>
        <h1>{result}</h1>
        <input onChange={this.setNum1} type="text" value={num1}/>
        <input onChange={this.setNum2} type="text" value={num2} />
        <button onClick={this.clear}>Clear</button>
        <br/>
        <button onClick={this.add}>+</button>
        <button onClick={this.subtract}>-</button>
      </div>
    );
  }
}

export default Calculator;