// All this component does is return its children 
// This is useful beacuse it allow us to wrap our components without breaking the DOM order

const aux = (props) => {
   return props.children
};


export default aux;