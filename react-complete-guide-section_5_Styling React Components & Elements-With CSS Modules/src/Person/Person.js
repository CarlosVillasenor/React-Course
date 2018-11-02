import React from 'react';
import styles from './Person.css'

const person = (props) => {

    return (
        <div className={styles.personStyles}>
            <p onClick={props.click}>I am {props.name} and I am {props.age} </p>
            <p>{props.children}</p>
            <input 
            type="text" 
            onChange={props.inputChanged} 
            value={props.name} />
        </div>
    );
}

export default person;