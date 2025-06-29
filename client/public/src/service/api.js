
import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api'
});

export const getGenres = () => API.get('/movies/genres').then(res => res.data);
export const searchDiscover = (params) =>
  API.get('/movies/discover', { params }).then(res => res.data);
