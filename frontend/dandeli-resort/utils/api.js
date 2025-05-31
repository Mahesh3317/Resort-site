// utils/api.js
import axios from 'axios';

const API_BASE = 'http://localhost:1337/api';

export const fetchResorts = async () => {
  const res = await axios.get(`${API_BASE}/resorts?populate=*&sort=createdAt:desc`);
  return res.data.data;
};
