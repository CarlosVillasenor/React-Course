import React from 'react';

const personStyle = {
    backgroundColor: '#fcfcfc',
    width: '60%',
    margin: '16px auto',
    border: '1px solid #eee',
    boxShadow: '0 2px 3px #ccc',
    padding: '16px',
    textAlign: 'center'
};

const person = (props) => {
    return (
        <div style={personStyle}>
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