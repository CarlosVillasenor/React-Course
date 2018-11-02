// Stateful Component
import React, {PureComponent} from 'react';
import Person from './Person/Person'

class Persons extends PureComponent {

    constructor(props){
        super(props);
        console.log('[Persons.js] Inside constructor()', props);
        this.lastPersonsRef = React.createRef();
    }

    componentWillMount(){
        console.log('[Persons.js] Inside componentWillMount()');
    }

    render () {
        console.log('[Persons.js] Inside render()');
        return this.props.persons.map( (person, index) => {
            return <Person
              ref={this.lastPersonsRef}
              click={ () => this.props.clicked(index)}
              position={index}
              name={person.name} 
              age={person.age}
              key={person.id}
              inputChanged={ (event) => this.props.changed(event, person.id) } />
        } );
    }

    componentDidMount(){
        console.log('[Persons.js] Inside componentDidMount()');
        this.lastPersonsRef.current.focus();
    }

    // Component lifecycle - Update
 
    componentWillReceiveProps(nextProps){
        console.log('[UPDATE Persons.js] Inside componentWillReciveProps', nextProps);
    }

    // We don´t need to use the shouldComponentUpdate method because we are inside a PureComponent,
    // which automatically checks if any property has been changed in order to update
    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps, nextState);
    //     // We will check if the new properties are diferent from the actual properties
    //     // in order to check if we must update our component
    //     return nextProps.persons !== this.props.persons ||
    //     nextProps.changed !== this.props.changed  ||
    //     nextProps.clicked !== this.props.clicked;
    // }

    componentWillUpdate(nextProps, nextState){
        console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate(nextProps, nextState){
        console.log('[UPDATE Persons.js] Inside componentDidUpdate', nextProps, nextState);
    }

}

export default Persons;

// Staless Component Version
// import React from 'react';
// import Person from './Person/Person'

// const persons  = (props) =>  {

//     return props.persons.map( (person, index) => {
//         return <Person
//           click={ () => props.clicked(index)}
//           name={person.name} 
//           age={person.age}
//           key={person.id}
//           inputChanged={ (event) => props.changed(event, person.id) } />
//     } );

// }

// export default persons;
