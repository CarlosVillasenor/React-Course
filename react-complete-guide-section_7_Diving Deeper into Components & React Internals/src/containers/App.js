import React, { PureComponent } from 'react';
import styles from './App.css';
import Cockpit from '../components/Cockpit/Cockpit'
import Persons from '../components/Persons/Persons';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';
// With React 16.3 we can use the method createContext that allows us to create context constants
// that we can export to our child components wiht a provider Wrapper and they can consume them 
// with a Consumer Wrapper, they must first import it as an Object
export const AuthContext = React.createContext();

class App extends PureComponent {

  // Component Lifecycle - Creation
  constructor(props){
    super(props);
    console.log('[App.js] Inside Constructor', props);
    // This is the old aproach for declaring states
    this.state = {
      persons : [
        { id:'key01', name: 'Carlos', age: 28 },
        { id:'key02', name: 'Max', age: 29 },
        { id:'key03', name: 'Stephanie', age: 26 }
      ],
      showPersons: false,
      toogleClicked: 0,
      authenticated: false,
      scrollPosition: 0
    }
    this.inputElement = React.createRef();
  }

  // This is the modern ES6 aproach for declaring states
  // state = {
  //   persons : [
  //     { id:'key01', name: 'Carlos', age: 28 },
  //     { id:'key02', name: 'Max', age: 29 },
  //     { id:'key03', name: 'Stephanie', age: 26 }
  //   ],
  //   showPersons: false
  // }

  componentWillMount(){
    console.log('[App.js] Inside componentWillMount()');
  }
  
  render() {
    console.log('[App.js] Inside render()');
    let persons = null;
  
    if (this.state.showPersons){
      persons = (
        <div>
          <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
        </div>
      );
    }
  
    return (
      <Aux>
        <button
        ref={this.inputElement}
        className={styles.Button} 
        onClick={ () => {this.setState({showPersons:true})} }>
        Show Persons Always
        </button>
        <Cockpit
        appTitle={this.props.title}
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        login={this.loginHandler}
        clicked={this.tooglePersonsHandler}/>
        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
    
  }

  componentDidMount(){
    console.log('[App.js] Inside componentDidMount()');
  }

  // Component lifecycle - Update

  // We don´t need to use the shouldComponentUpdate method because we are inside a PureComponent,
  // which automatically checks if any property has been changed in order to update
  // shouldComponentUpdate(nextProps, nextState){
  //   // We will check if the new properties are diferent from the actual properties
  //   // in order to check if we must update our component
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
  //   return nextState.persons !== this.state.persons ||
  //   nextState.showPersons !== this.state.showPersons;
  // }
  
  componentWillUpdate(nextProps, nextState){
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
  }
  
  componentDidUpdate(nextProps, nextState){
    console.log('[UPDATE App.js] Inside componentDidUpdate', nextProps, nextState);
    window.scroll( 0, this.state.scrollPosition );
  }

  // componentWillMount, componentWillUpdate and componentWillReceiveProps are legacy lifecycles because
  // they we easy to create errors with, in React 16.3 we can use getDerivedStateFromProps and
  // getSnapshotBeforeUpdate

  // getDerivedStateFromProps is executed whenever your props are updated thus we actually have to use
  // the static keyword in front off the lifecycle
  static getDerivedStateFromProps(nextProps,prevState){
    console.log('[UPDATE App.js] Inside getDerivedStateFromProps',
    nextProps,
    prevState);

    return prevState
  }

  // This lifecycle will be executed right before the dom does update.
  // A good React example on how to use getDerivedStateFromProps with getSnapshotBeforeUpdate
  // You can save the current scrolling position of your user in getSnapshotBeforeUpdate, *done
  // you can save it before the dom changes and in componentDidUpdate, you could scroll the user back to the
  // previously saved position for example. Let's say you have a list of items, you add new list items
  // here you can save scrolling positions before they are added
  // and here you can set the users scrolling to that position after they have been added.
   getSnapshotBeforeUpdate(){
    console.log('[UPDATE App.js] Inside getSnapshotBeforeUpdate');
    this.setState({ scrollPosition: window.scrollY });
  }

  // Handlers

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( persn => persn.id === id );
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
    // the best practice case of mutating state if you rely on the previous state of an state is 
    // by calling previous state, this prevents us for editing this old state at the same point of 
    // time anywhere else in the application because set state actually runs asynchronously.
    this.setState( (prevState, props) => {
      return {
        showPersons: !doesShow,
        toogleClicked: prevState.toogleClicked + 1
      } 
    });
  }

  deletePersonHandler = (personIndex) => {
      const persons = [...this.state.persons];
      persons.splice(personIndex,1);
      this.setState({persons:persons});
  }

  loginHandler = () => {
    this.setState({ authenticated: true });
  }

}

export default withClass(App, styles.App);
