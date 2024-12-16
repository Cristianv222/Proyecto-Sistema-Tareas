import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/authService'; // Asegúrate de que este archivo exista y esté configurado correctamente
import Login from '../imagenes/login.png';
import '../styles/Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Maneja los cambios de los inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Valida el formulario antes de enviarlo
  const validateForm = () => {
    if (!formData.nombre || !formData.password) {
      setError('Todos los campos son obligatorios');
      return false;
    }
    if (formData.password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return false;
    }
    return true;
  };

  // Maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar formulario
    if (!validateForm()) {
      return;
    }
    console.log("Datos del formulario", formData);  // Verifica los valores antes de enviarlos
    try {
      // Llamada al servicio para registrar al usuario
      await authService.register(formData);
      // Redirigir al login si el registro es exitoso
      navigate('/login');
    } catch (error) {
      // Captura errores y muestra un mensaje apropiado
      setError(error.response?.data?.message || 'Error en el registro');
    }
  };

  return (
    <div className="min-h-screen">
      <div className="register-container">
        {/* Imagen decorativa */}
        <div className="register-image">
          <img src={Login} alt="Registro" />
        </div>
        <h2 className="register-title">Registro</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="input-field"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
            className="input-field"
            required
          />
          <button
            type="submit"
            className="submit-button"
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;