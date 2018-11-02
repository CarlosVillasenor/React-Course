// We need to import React and the Component object because we are using class-based 
// components
import React, { Component } from 'react';
import './App.css';
/*
The name after the word import is up to us, but it should be the name  of our components, 
staring with a capital character, we them add the location of our component, we use ./ because
it is a relative path
*/
import Person from './Person/Person';

class App extends Component {
  // Whilst props allow you to pass data down the component tree (and hence trigger an UI 
  // update), state is used to change the component, well, state from within.Changes to state 
  // also trigger an UI update.
  state = {
    persons : [
      { name: 'Carlos', age: 28 },
      { name: 'Max', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  }
  /*
  To name our methods it is really useful to name it with Handler to  indicate that it is a 
  method you are not actibely calling but you are assigning as an event handler, we use this 
  ES6 syntax for our methods to avoid troubles with the this keyword, beacuse this will not 
  refer to the class runtime
  */
  switchNameHandler = (newName) => {
    /*
    Don´t do this: this.state.persons[0].name = 'Maximilian';
    we will use the React´s special setState method  setState wich updates the stastes we send 
    as argument, it takes an object as an argument, we ned to remeber that this method is only 
    available in class-based components
    */
    this.setState({persons : [
      { name: newName, age: 28 },
      { name: 'Maximilian', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  }) 
  }

  nameChangedHandler = (event) => {
    this.setState({persons : [
      { name: 'Carlos', age: 28 },
      { name: event.target.value, age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  }) 
  }

  render() {
    // We can create a constant object that will hold styles as we are aware that css have js
    // representations, we can represent our styles with either camelCase (whic causes a 
    // warning) or with a dash
    const buttonStyle = {
      'background-color': 'white',
      font: 'inherit',
      fontWeight: 'bold',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    };
    // We use the parentheses so we can write the JSX code without any errors
    return (
      /* 
      This is JSX which crearly looks like html and it should, so it would be easy for us to 
      write it, React converts it behind the scenes, we also need to use className instead of
      class because class is a reserved word in js. Our button calls a method also our 
      children in person calls the same method we use bind wich is an Object to wich the this
      keyword can refer inside the new function. this now became a list of arguments which 
      will be passed to our method. We could also use the arrow function to call our method 
      and pass them arguments but it is inefficient because React can re-render certain things
      doing so 
      */
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working!</p>
        <button 
        style={buttonStyle} 
        onClick={this.switchNameHandler.bind(this, 'Javier')}>Switch Name</button>
        <Person
         name={this.state.persons[0].name}
         age={this.state.persons[0].age} />
        <Person 
         name={this.state.persons[1].name} 
         age={this.state.persons[1].age} 
         click={ () => this.switchNameHandler('Carlillos!!')}
         changed={this.nameChangedHandler} >
         My hobbies: Racing </Person>
        <Person 
         name={this.state.persons[2].name} 
         age={this.state.persons[2].age} />
      </div>
    );
    /*
    this commented code represents how our code above is interpreted without the imported 
    component,we could write it like this but it would be harded to write and undestand 
    */
    // return React.createElement('div', {className: 'App'} , React.createElement('h1',null,'Hello Baby Bob') );
  }
}

export default App;
