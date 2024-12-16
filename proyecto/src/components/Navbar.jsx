import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo y menú principal */}
          <div className="flex">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="./" className="text-2xl font-bold text-blue-600">
                Teletrabajo
              </Link>
            </div>

            {/* Menú de navegación */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link 
                to="/" 
                className="text-gray-900 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Inicio
              </Link>
              <Link 
                to="/about" 
                className="text-gray-900 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Acerca de
              </Link>
              <Link  
              to="/Dashboard" 
              className="text-gray-900 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
               Dashboard
               </Link>
               <Link 
                to="/gestion" 
                className="text-gray-900 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Gestion
              </Link>

            </div>
          </div>

          {/* Botones de autenticación */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            <Link 
              to="/login" 
              className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
            >
              Iniciar Sesión
            </Link>
            <Link 
              to="/register" 
              className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Registrarse
            </Link>
          </div>

          {/* Menú móvil - botón hamburguesa */}
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú principal</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="pt-2 pb-3 space-y-1">
            <Link 
              to="/" 
              className="text-gray-900 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
            >
              Inicio
            </Link>
            <Link 
              to="/about" 
              className="text-gray-900 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
            >
              Acerca de
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4 space-x-3">
              <Link 
                to="/login" 
                className="w-full text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Iniciar Sesión
              </Link>
              <Link 
                to="/register" 
                className="w-full text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Registrarse
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;