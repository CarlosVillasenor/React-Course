import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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
    // Get the index of our person by looking in our Persons array
    const personIndex = this.state.persons.findIndex( per => per.id === id );
    // Copy our Person object from our Persons array
    const person = {
      ...this.state.persons[personIndex] 
    };
    // Made the changes to that copied object
    person.name = event.target.value;
    // Copy the whole persons array  
    const persons = [...this.state.persons];
    // Update that copied array with our modified copied object
    persons[personIndex] = person;
    // Set our Persons array value with the modified copy we made in our function
    this.setState({ persons : persons });
  }

  tooglePersonsHandler = () => {
    // Create a constant that holds the value of your boolean property
    const doesShow = this.state.showPersons;
    // Set our boolean property to the oposite of the constant we created
    this.setState({ showPersons : !doesShow });
  }

  deletePersonHandler = (personIndex) => {
      // Create a copy of our persons array
      const persons = [...this.state.persons];
      // Update the copy
      persons.splice(personIndex,1);
      // Set our persons array with the copy
      this.setState({persons:persons});
  }

  render() {
  
    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      fontWeight: 'bold',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    };

    // persons is by default a null value
    let persons = null;
    // If showPersons is true then with JSX we will add elements to persons
    if (this.state.showPersons){
      persons = (
        <div>
          { this.state.persons.map( (person, index) => {
            return <Person
              click={ () => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              // we can send our event as a paramether to our function with the arrow function
              inputChanged={ (event) => this.nameChangedHandler(event, person.id) } />
          })}
        </div> 
      );
    }
  
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working!</p>
        <button 
        style={buttonStyle} 
        onClick={this.tooglePersonsHandler}>
        Toogle Persons
        </button>

        {persons}
        
      </div>
    );
    
  }
}

export default App;
