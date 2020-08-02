import React, { Component } from 'react';
import './App.css';
import Validator from './Validator/Validator'
import Char from './Char/Char'
class App extends Component {

  state = {
    text : ''
  }

  onChangeHandler = (event) => {
    const changeText = event.target.value
    this.setState({ text : changeText})
  }

  deleteHandler = (index) => {
    const text = this.state.text.split('')
    text.splice(index,1)
    const updateText = text.join('')
    this.setState({text : updateText})
  }

  
  render() {
    const charList = (
      <div>
        {this.state.text.split('').map( (char,index) => {
          return <Char delete={this.deleteHandler.bind(this,index)} key={index} char={char}></Char>
        })}
      </div>
    )
    return (
      <div className="App">
        <input type="text" onChange = {this.onChangeHandler} value={this.state.text}/>
        <p>{this.state.text}</p>
        <Validator len = {this.state.text.length} />
        {charList}
      </div>
    );
  }
}

export default App;
