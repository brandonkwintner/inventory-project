import axios from 'axios';

// Sole axios instance to be used throughout application
const _axios = axios.create();
_axios.defaults.withCredentials = true;

export default _axios;
