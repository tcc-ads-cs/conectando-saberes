import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cscrudapi.onrender.com/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;