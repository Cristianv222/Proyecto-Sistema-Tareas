import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

export const authService = {
  register: async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/register`, userData);
      return response.data;
    } catch (error) {
      throw error.response?.data || new Error('Error en el registro');
    }
  },

  login: async (credentials) => {
    try {
      const response = await axios.post(`${API_URL}/login`, credentials);
      
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('token', response.data.token);
      }

      return response.data;
    } catch (error) {
      throw error.response?.data || new Error('Error en el inicio de sesión');
    }
  },

  logout: () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  },

  getCurrentUser: () => {
    return JSON.parse(localStorage.getItem('user'));
  }
};