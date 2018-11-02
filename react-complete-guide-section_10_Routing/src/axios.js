import axios from 'axios';

// This creates a instance of axios, like a copy of the axios object you could say and you can create
// multiple such copies.
const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// We could also use interceptors in our instance
// instance.interceptors.request...

export default instance;