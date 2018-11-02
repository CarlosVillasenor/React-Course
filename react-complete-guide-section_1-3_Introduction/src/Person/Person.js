// We need to always import React to interpret our components
import React from 'react';
import './Person.css';
/* 
We will use the ES6 syntax to propertly work with the this selector,we will also 
call our constants/variables with lowercase, because that is the convention on React.
To add properties to our component we need to pass them as a parameter of our
variable,constant or class, for that we use props which allow you to pass data from a 
parent (wrapping) component to a child (embedded) component. Using Stateless Components
its really usefull because they don´t  manipullate your aplication state
*/
const person = (props) => {
    /*
    If we want to use dinamic content between our JSX we just need
    to wrap it in singe curly braces
    we can past the children property to use the nested content of our component,
    children refers to any elements, in this case a paragraph
    */
    return (
        <div className="Person">
            <p onClick={props.click}>I am {props.name} and I am {props.age} </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} ></input> 
        </div>
    );
}
// We need to export our constant which holds our function
export default person;