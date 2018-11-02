import React from 'react';

const userOutput = (props) => {

    const cardStyle = {
        backgroundColor: '#f9f9f9',
        width: '200px',
        padding: '16px',
        margin: '16px',
        display: 'inline-block',
        boxShadow: '0px 2px 4px grey'
    };

    return(
        <div style={cardStyle} className="userOutput">
            <p onClick={props.click} >A salutation to {props.name}!</p>
            <p>And a Second salutation!</p>
        </div>
    );

}

export default userOutput;