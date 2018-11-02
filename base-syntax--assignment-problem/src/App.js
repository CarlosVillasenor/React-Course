import React, { Component } from 'react';
import './App.css';
import UserInput from './Components/UserInput/UserInput';
import UserOutput from './Components/UserOutput/UserOutput';

class App extends Component {

  state = {
    username:'Jordi' 
  }

  changeNameHandler = (newName) => {
    this.setState({username:newName})
  }

  inputNameChangedHandler = (event) => {
    this.setState({username:event.target.value })
  }

  render() {

    const inputStyle = {
      'background-color': 'white',
      font: 'inherit',
      fontWeight: 'bold',
      border:'1px solid grey',
      padding:'12px',
      textAlign: 'center',
      margin: '16px'
    };

    return (
      <div className="App">
        <p style={inputStyle}>Assignment Problem</p>
        <UserInput changed={this.inputNameChangedHandler} currentName={this.state.username} />

        <UserOutput name="Carlos" />
        <UserOutput name={this.state.username} click={this.changeNameHandler.bind(this,'Xavi')} />
        <UserOutput name="Ieyo"/>
      </div>
    );
  }
}

export default App;