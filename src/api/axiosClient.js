import axios from 'axios';

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'https://helpdeskportal2-hscrhyczfhagfde7.southindia-01.azurewebsites.net',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default axiosClient;

