// Stateful Component
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
// We can import a context Object to consume its value
import { AuthContext } from '../../../containers/App'

class Person extends Component {

    constructor(props){
        super(props);
        console.log('[Person.js] Inside constructor()', props);
        // createRef is a new method provided by react in the version 16.3
        // that allow us to create references
        this.inputElement = React.createRef();
    }

    componentWillMount(){
        console.log('[Person.js] Inside componentWillMount()');
    }

    render  (){
        console.log('[Person.js] Inside render()');
        return (
            <Aux>
                <AuthContext.Consumer>
                    {auth => auth ? <p>I am authenticated</p> : null }
                </AuthContext.Consumer>
                <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} </p>
                <p>{this.props.children}</p>
                <input
                // before React 16.3 this was the way for creating references
                // ref={ (inp) => { this.inputElement = inp } }
                ref={this.inputElement} 
                type="text" 
                onChange={this.props.inputChanged} 
                value={this.props.name} />
            </Aux>
        ) 
    }

    componentDidMount(){
        console.log('[Person.js] Inside componentDidMount()');
        if (this.props.position === 0){
            // We created this.inputElement as a reference with the ref property
            // The ref property can only be used in Staleful components
            // If we are working with the 16.3 way we need to use the current property
            // because inputElement in this case turns out to be a wrapper component 
            // and current gives us access to the underlying dom element
            this.inputElement.current.focus();
        }
    }

    focus(){
        this.inputElement.current.focus();
    }
    
}

// We add the object propTypes to Person so the library prop-types will check if the properties 
// that are send to Persons are the type they need to be
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    inputChanged: PropTypes.func
};

export default withClass(Person , styles.Person);

// Staless Component Version
// import React from 'react';
// import styles from './Person.css'

// const person = (props) => {
//     return (
//         <div className={styles.personStyles}>
//             <p onClick={props.click}>I am {props.name} and I am {props.age} </p>
//             <p>{props.children}</p>
//             <input 
//             type="text" 
//             onChange={props.inputChanged} 
//             value={props.name} />
//         </div>
//     );
// }

// export default person;
