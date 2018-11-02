import React from 'react';
import styles from './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit = (props) => {

    const classes = [];
    let btnClass = styles.Button;

    if (props.showPersons){
        btnClass = [ styles.Button, styles['--red'] ].join(' ');
    }
    
    if (props.persons.length <= 2){
      classes.push(styles['--red']); // classes['--red']
    }

    if (props.persons.length <= 1){
      classes.push(styles['--bold']); // classes['--red','--bold]
    }

    return (
        <Aux>
            <h1>{props.appTitle}</h1>
            <p className={classes.join(' ')}>This is working.</p>
            <button
            className={btnClass}
            onClick={props.clicked}>
            Toogle Persons
            </button>
            <button
            className={styles.LogButton} 
            onClick={props.login}>
            Log In
            </button>
        </Aux>
    );

};

export default cockpit;