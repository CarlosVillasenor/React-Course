import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// We can define our default global URL for our components to use
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
// If we inspect our post log we will see that the request configuration
// we got the authorization header and Content-Type = application.json.
axios.defaults.headers.common['Authorization'] = 'AUTH TOKENS';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// This will affect all requests sent from anywhere in our app. There we can access the request 
// object and now we will simply add use to register a new interceptor, that interceptor takes a 
// function as an input which receives the config or the request we could say.
axios.interceptors.request.use( request => {
    console.log(request);
    // In your interceptor function here, you need to always return the request or the request config
    // otherwise you're blocking the request. Of course we can also edit the request config before
    // you return it, that's the idea behind the interceptor a very common use case is for the request
    // interceptor to add some common headers
    return request;
    // we can add a function which handles any errors.
}, error => {
    // this will only pop if the request if fails to be send, like with no internet connection
    console.log(error);
    // we should also return promise reject error here though so that we still forward it to our
    // request as we wrote it in a component
    return Promise.reject(error);
});

// This method will intercept the response of the server
axios.interceptors.response.use( response => {
    console.log(response);
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

// Removing Interceptors
//  getting rid of one interceptor is easy. Simply store the reference to the interceptor in a 
// variable and call eject
// Example:
// var myInterceptor = axios.interceptors.request.use(function () {/*...*/});
// axios.interceptors.request.eject(myInterceptor);


ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
