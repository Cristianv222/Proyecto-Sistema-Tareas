import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import usuario from '../imagenes/login.png';
import '../styles/login.css';


const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.login(credentials);
      navigate('/dashboard');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="login-container">
        {/* Imagen decorativa */}
        <div className="login-image">
          <img src={usuario} alt="Login" />
        </div>

      
        <h2 className="login-title">Iniciar Sesión</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={credentials.email}
            onChange={handleChange}
            className="input-field"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={credentials.password}
            onChange={handleChange}
            className="input-field"
            required
          />
          <button
            type="submit"
            className="submit-button"
          >
            Iniciar Sesión
          </button>
        </form>
        <p className="mt-4 text-center">
          ¿No tienes una cuenta? 
          <a href="/register" className="register-link">Regístrate</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
