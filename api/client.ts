import axios from 'axios';

const baseURL = `https://www.omdbapi.com/`;

const client = axios.create({
  baseURL,
});

export default client;
