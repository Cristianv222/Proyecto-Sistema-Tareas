import React, { useState } from 'react';

function Home() {
  const [isOpenDialog1, setIsOpenDialog1] = useState(false);
  const [isOpenDialog2, setIsOpenDialog2] = useState(false);

  return (
    <div className="container mx-auto text-center mt-8">
      <h1 className="text-3xl font-bold mb-4">Bienvenido a la Página de Inicio</h1>
      
      <div className="space-x-4">
        <button
          onClick={() => setIsOpenDialog1(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Abrir Cuadro de Diálogo 1
        </button>
        <button
          onClick={() => setIsOpenDialog2(true)}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Abrir Cuadro de Diálogo 2
        </button>
      </div>

      {/* Cuadro de Diálogo 1 */}
      {isOpenDialog1 && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
            <h2 className="text-xl font-semibold mb-4">Cuadro de Diálogo 1</h2>
            <p className="text-gray-700 mb-4">
              Este es el contenido del primer cuadro de diálogo.
            </p>
            <button
              onClick={() => setIsOpenDialog1(false)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Cuadro de Diálogo 2 */}
      {isOpenDialog2 && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
            <h2 className="text-xl font-semibold mb-4">Cuadro de Diálogo 2</h2>
            <p className="text-gray-700 mb-4">
              Este es el contenido del segundo cuadro de diálogo.
            </p>
            <button
              onClick={() => setIsOpenDialog2(false)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
