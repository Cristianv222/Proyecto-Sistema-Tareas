import React from 'react';
import fondoBienvenida from '../imagenes/Fondo_WFH_02.jpg';
import beneficio from '../imagenes/BENEFICIOS.JPG';
import teams from '../imagenes/131.jpg';
import lugar from '../imagenes/lugar.jpg';
import tiempo from '../imagenes/tiempo.jpg';
import bienestar from '../imagenes/bienestar.jpg';

function Home() {
  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200">
      {/* Encabezado */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-700">Teletrabajo: Guía Práctica y Recursos</h1>
        <p className="text-gray-700 mt-4">
          Descubre cómo mejorar tu productividad, bienestar y eficiencia mientras trabajas desde casa.
        </p>
        <img  
        src={fondoBienvenida} 
        alt="Imagen decorativa de bienvenida" 
        className="mt-6 rounded-lg shadow-md mx-auto"
        />

      </header>

      {/* Nuestra Misión */}
      <main>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Beneficios del Teletrabajo</h2>
          <p className="text-gray-600">
            El teletrabajo ofrece flexibilidad, ahorro de tiempo y mejora el equilibrio entre la vida personal y laboral.
            Además, contribuye a reducir la huella de carbono al evitar desplazamientos diarios.
          </p>
          <img  
        src={beneficio} 
        alt="Imagen decorativa de bienvenida" 
        className="mt-6 rounded-lg shadow-md mx-auto"
        />
        </section>

        {/* Noticias Recientes */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Herramientas Esenciales</h2>
          <p className="text-gray-600">
            Optimiza tu trabajo remoto con herramientas como plataformas de videoconferencia, software de gestión de tareas y almacenamiento en la nube.
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-4">
            <li>Zoom y Microsoft Teams para reuniones virtuales.</li>
            <li>Trello y Asana para organizar tus tareas.</li>
            <li>Google Drive y OneDrive para almacenamiento colaborativo.</li>
          </ul>
          <img 
            src={teams} 
            alt="Herramientas para teletrabajo" 
            className="mt-4 rounded-lg shadow-md mx-auto"
          />
        </section>

        {/* Recursos útiles */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Consejos para Trabajar desde Casa</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border rounded-lg shadow-sm bg-white hover:shadow-md">
              <h3 className="text-lg font-medium text-blue-500">Organiza tu Espacio</h3>
              <p className="text-gray-600 mt-2">
                Dedica un área tranquila y ordenada para tu trabajo, asegurando una buena iluminación y comodidad.
              </p>
              <img 
                src={lugar}
                alt="Espacio de trabajo organizado" 
                className="mt-4 rounded-lg"
              />
            </div>
            <div className="p-4 border rounded-lg shadow-sm bg-white hover:shadow-md">
              <h3 className="text-lg font-medium text-blue-500">Gestiona tu Tiempo</h3>
              <p className="text-gray-600 mt-2">
                Usa técnicas como Pomodoro para enfocarte en tareas importantes y evita distracciones.
              </p>
              <img 
                src={tiempo}
                alt="Gestión del tiempo" 
                className="mt-4 rounded-lg"
              />
            </div>
            <div className="p-4 border rounded-lg shadow-sm bg-white hover:shadow-md">
              <h3 className="text-lg font-medium text-blue-500">Cuida tu Bienestar</h3>
              <p className="text-gray-600 mt-2">
                Integra pausas activas, estiramientos y momentos de desconexión para mantener tu salud mental y física.
              </p>
              <img 
                src={bienestar} 
                alt="Bienestar en el teletrabajo" 
                className="mt-4 rounded-lg"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-12 text-center text-gray-500">
        <p>&copy; 2024 Teletrabajo y Productividad. Todos los derechos reservados.</p>
        <img 
          src="https://via.placeholder.com/150x50" 
          alt="Logo de Teletrabajo" 
          className="mt-4 mx-auto"
        />
      </footer>
    </div>
  );
}

export default Home;
