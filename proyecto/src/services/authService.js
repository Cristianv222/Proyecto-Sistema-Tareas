import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth/';

const register = async (nombre, email, password, rol_id) => {
  const response = await axios.post(`${API_URL}register`, { nombre, email, password, rol_id });
  return response.data;
};

const login = async (email, password) => {
  const response = await axios.post(`${API_URL}login`, { email, password });
  return response.data;
};

export { register, login };
