import axios from 'axios';

const api = axios.create({baseURL: `https://api.mdsinsure.com`});

export default api;
