import React, { Component } from 'react';
import './App.css';
// Before importing Radium, install it in the terminal with: npm install --save radium
import Radium,{ StyleRoot } from 'radium';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  
  state = {
    persons : [
      { id:'key01', name: 'Carlos', age: 28 },
      { id:'key02', name: 'Max', age: 29 },
      { id:'key03', name: 'Stephanie', age: 26 }
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( per => per.id === id );
    const person = {
      ...this.state.persons[personIndex] 
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons : persons });
  }

  tooglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons : !doesShow });
  }

  deletePersonHandler = (personIndex) => {
      const persons = [...this.state.persons];
      persons.splice(personIndex,1);
      this.setState({persons:persons});
  }

  render() {
  
    const buttonStyle = {
      background: 'green',
      color: 'white',
      font: 'bold 16px sans-serif',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer',
      // With Radium installed we can use seudoclasses in our inline styles
      ':hover':{
        background: 'blue',
        color: 'black'
      }
    };

    let persons = null;
  
    if (this.state.showPersons){

      persons = (
        <div>
          { this.state.persons.map( (person, index) => {
            return <ErrorBoundary key={person.id}>
            <Person
              click={ () => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              inputChanged={ (event) => this.nameChangedHandler(event, person.id) } />
              </ErrorBoundary>
          })}
        </div> 
      );
      // We can select our variables/constants and modify/mutate them
      buttonStyle.background = 'red';
      buttonStyle[':hover'] = {
        background: 'salmon',
        color: 'black'
      };

    }

    
    const classes = [];
    if (this.state.persons.length <= 2){
      classes.push('--red'); // classes['--red']
    }
    if (this.state.persons.length <= 1){
      classes.push('--bold'); // classes['--red','--bold]
    }
  
    return (
      <StyleRoot>
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button 
        style={buttonStyle} 
        onClick={this.tooglePersonsHandler}>
        Toogle Persons
        </button>

        {persons}
        
      </div>
      </StyleRoot>
    );
    
  }
}

export default Radium(App);
