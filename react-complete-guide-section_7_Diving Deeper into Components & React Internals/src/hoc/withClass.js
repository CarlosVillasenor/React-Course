// Bassically a High Order Component only wraps another component and does 
// something with that wrapping component

import React, { Component} from 'react';

// This function returns a class on demand
const withClass = (WrappedComponent,className) => {
    // pass all the props to the wrapped component with the ES6 spread operator {...props}      
    const WithClass = class extends Component {
        render (){
            return (
                <div className={className}>
                <WrappedComponent {...this.props} ref={this.props.forwardedRef} />
                </div>
            )
        }
    }
    return React.forwardRef((props, ref) => {
        return <WithClass {...props} forwardedRef={ref} />
    });
}

export default withClass

// Another way of creating our HOC without been a component
// import React from 'react';

// const withClass = (props) => (
//     <div className={props.styles}>
//         {props.children}
//     </div>
// );

// export default withClass;

