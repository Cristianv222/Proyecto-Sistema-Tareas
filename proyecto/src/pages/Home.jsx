import React from 'react';
import fondoBienvenida from '../imagenes/Fondo_WFH_02.jpg';


function Home() {
  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-700">Bienvenido a Nuestra Página Informativa</h1>
        <p className="text-gray-700 mt-4">
          Explora información relevante, noticias y recursos útiles en un solo lugar.
        </p>
        <img src={fondoBienvenida} 
        alt="Imagen decorativa de bienvenida" 
        className="mt-6 rounded-lg shadow-md mx-auto"
        />

      </header>

      <main>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Nuestra Misión</h2>
          <p className="text-gray-600">
            Nuestra misión es proporcionar información clara, precisa y accesible para ayudar a las personas a tomar decisiones informadas. Creemos en la importancia de la transparencia y el acceso equitativo al conocimiento.
          </p>
          <img 
            src="https://via.placeholder.com/600x300" 
            alt="Imagen representando nuestra misión" 
            className="mt-4 rounded-lg shadow-md mx-auto"
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Noticias Recientes</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Nuevo avance en tecnología sostenible para 2024.</li>
            <li>Consejos para mejorar tu bienestar físico y mental.</li>
            <li>Actualización de las políticas globales sobre cambio climático.</li>
          </ul>
          <img 
            src="https://via.placeholder.com/600x300" 
            alt="Imagen de noticias recientes" 
            className="mt-4 rounded-lg shadow-md mx-auto"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Recursos Útiles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border rounded-lg shadow-sm bg-white hover:shadow-md">
              <h3 className="text-lg font-medium text-blue-500">Guías Educativas</h3>
              <p className="text-gray-600 mt-2">
                Accede a nuestras guías paso a paso para aprender nuevas habilidades.
              </p>
              <img 
                src="https://via.placeholder.com/300x200" 
                alt="Imagen de guías educativas" 
                className="mt-4 rounded-lg"
              />
            </div>
            <div className="p-4 border rounded-lg shadow-sm bg-white hover:shadow-md">
              <h3 className="text-lg font-medium text-blue-500">Herramientas en Línea</h3>
              <p className="text-gray-600 mt-2">
                Explora herramientas gratuitas para simplificar tus tareas diarias.
              </p>
              <img 
                src="https://via.placeholder.com/300x200" 
                alt="Imagen de herramientas en línea" 
                className="mt-4 rounded-lg"
              />
            </div>
            <div className="p-4 border rounded-lg shadow-sm bg-white hover:shadow-md">
              <h3 className="text-lg font-medium text-blue-500">Comunidad</h3>
              <p className="text-gray-600 mt-2">
                Únete a nuestra comunidad y comparte tus experiencias con otros usuarios.
              </p>
              <img 
                src="https://via.placeholder.com/300x200" 
                alt="Imagen de comunidad" 
                className="mt-4 rounded-lg"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-12 text-center text-gray-500">
        <p>&copy; 2024 Nuestra Página Informativa. Todos los derechos reservados.</p>
        <img 
          src="https://via.placeholder.com/150x50" 
          alt="Logo del sitio" 
          className="mt-4 mx-auto"
        />
      </footer>
    </div>
  );
}

export default Home;
