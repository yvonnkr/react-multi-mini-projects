import axios from 'axios';

//create  a custom instance of axios client with default properties
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: process.env.REACT_APP_UNSPLASH_ACCESS_KEY
  }
});
