import axios from 'axios';

const api = axios.create({
    baseURL: 'https://pmweb-dev.github.io'
});

export default api;