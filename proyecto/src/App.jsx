import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Importa tu Navbar
import Home from './pages/Home'; // Página de Inicio
import About from './pages/About'; // Página "Acerca de"
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Gestion from './pages/Gestion';

function App() {
  return (
    <Router>
      <Navbar /> {/* Coloca el Navbar aquí */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> {/* Ruta del Login */}
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/gestion' element={<Gestion/>} />
      </Routes>
    </Router>
  );
}

export default App;
