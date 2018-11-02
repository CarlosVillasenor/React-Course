import React from 'react';

const userInput = (props) => {

    const inputStyle = {
        margin: '16px',
        fontSize: '16px',
        fontFamily: 'inherit'
    };

    return (
            <input
            style={inputStyle} 
            type="text" 
            onChange={props.changed} 
            value={props.currentName} />
    );

}

export default userInput;