import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Importa tu Navbar
import Home from './pages/Home'; // Página de Inicio
import About from './pages/About'; // Página "Acerca de"
import Login from './pages/Login';
import { authService } from './services/authService';
function App() {
  return (
    <Router>
      <Navbar /> {/* Coloca el Navbar aquí */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="./pages/Login" element={<div>Login Page</div>} />
        <Route path="./pages/Register" element={<div>Register Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
