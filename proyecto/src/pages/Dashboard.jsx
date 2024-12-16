import React, { useState, useEffect } from 'react'; 
import { 
  Users, 
  ClipboardList, 
  Clock, 
  BarChart2, 
  Loader2 
} from 'lucide-react';

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        // Simular llamadas API
        const mockEmployees = [
          { id: 1, nombre: 'Juan Pérez', rol: 'Desarrollador', email: 'juan@empresa.com' },
          { id: 2, nombre: 'María García', rol: 'Diseñadora', email: 'maria@empresa.com' }
        ];
        const mockTasks = [
          { id: 1, titulo: 'Implementar Dashboard', descripcion: 'Crear interfaz de usuario', estado: 'En Progreso', plazo: '2024-02-15', id_empleado: 1 },
          { id: 2, titulo: 'Diseñar Logo', descripcion: 'Crear nuevo logo corporativo', estado: 'Pendiente', plazo: '2024-02-20', id_empleado: 2 },
          { id: 3, titulo: 'Reunión de Proyecto', descripcion: 'Discusión de avances', estado: 'Completada', plazo: '2024-01-10', id_empleado: 2 }
        ];
        const mockReports = [
          { id: 1, id_empleado: 1, horas_trabajadas: 40, tareas_completadas: 5 },
          { id: 2, id_empleado: 2, horas_trabajadas: 35, tareas_completadas: 3 }
        ];

        setEmployees(mockEmployees);
        setTasks(mockTasks);
        setReports(mockReports);
        setLoading(false);
      } catch (error) {
        console.error('Error loading data:', error);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const getStatusColor = (status) => {
    switch(status) {
      case 'Pendiente': return 'bg-yellow-100 text-yellow-800';
      case 'En Progreso': return 'bg-cyan-100 text-cyan-800'; // Cambio a celeste
      case 'Completada': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className={`flex justify-center items-center h-screen ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="flex flex-col items-center">
          <Loader2 className="h-12 w-12 animate-spin text-cyan-500" />
          <p className={`mt-4 ${isDarkMode ? 'text-white' : 'text-gray-600'}`}>Cargando datos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-800'} p-8`}>
      <div className="container mx-auto">
        <div className={`mb-8 shadow-md rounded-lg p-6 flex justify-between items-center ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div>
            <h1 className="text-3xl font-bold">Panel de Gestión</h1>
            <p className="text-black-500">Resumen de actividades empresariales</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className={`bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-gray-700 text-white' : ''}`}>
              Activo
            </div>
            <img 
              src="/api/placeholder/40/40" 
              alt="Usuario" 
              className="w-10 h-10 rounded-full border-2 border-blue-300"
            />
          </div>
        </div>

        <button 
          onClick={() => setIsDarkMode(!isDarkMode)} 
          className="px-4 py-2 rounded-lg text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          {isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className={`rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow ${isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-white hover:bg-cyan-100'}`}>
            <div className="flex justify-between items-center mb-4">
              <div className="bg-cyan-100 text-cyan-500 p-3 rounded-full">
                <Users className="h-6 w-6" />
              </div>
              <div className="text-right">
                <p className="text-sm">Empleados</p>
                <p className="text-2xl font-bold">{employees.length}</p>
              </div>
            </div>
          </div>

          <div className={`rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow ${isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-white hover:bg-yellow-100'}`}>
            <div className="flex justify-between items-center mb-4">
              <div className="bg-yellow-100 text-yellow-500 p-3 rounded-full">
                <ClipboardList className="h-6 w-6" />
              </div>
              <div className="text-right">
                <p className="text-sm">Tareas Pendientes</p>
                <p className="text-2xl font-bold">
                  {tasks.filter(task => task.estado === 'Pendiente').length}
                </p>
              </div>
            </div>
          </div>

          <div className={`rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow ${isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-white hover:bg-green-100'}`}>
            <div className="flex justify-between items-center mb-4">
              <div className="bg-green-100 text-green-500 p-3 rounded-full">
                <Clock className="h-6 w-6" />
              </div>
              <div className="text-right">
                <p className="text-sm">Horas Trabajadas</p>
                <p className="text-2xl font-bold">
                  {reports.reduce((total, report) => total + report.horas_trabajadas, 0)}
                </p>
              </div>
            </div>
          </div>

          <div className={`rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow ${isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-white hover:bg-purple-100'}`}>
            <div className="flex justify-between items-center mb-4">
              <div className="bg-purple-100 text-purple-500 p-3 rounded-full">
                <BarChart2 className="h-6 w-6" />
              </div>
              <div className="text-right">
                <p className="text-sm">Tareas Completadas</p>
                <p className="text-2xl font-bold">
                  {reports.reduce((total, report) => total + report.tareas_completadas, 0)}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className={`rounded-lg shadow-md overflow-hidden ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white'}`}>
            <div className="bg-blue-450 px-6 py-4 border-b"> {/* Aquí se cambió a fondo blanco */}
              <h2 className="text-xl font-semibold flex items-center">
                <Users className="mr-3 h-5 w-5" />
                Empleados
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
              <thead>
                <tr className="bg-blue-450 text-blue-450 text-sm"> {/* Color azul oscuro */}
                    <th className="px-6 py-3 text-left">Título</th>
                    <th className="px-6 py-3 text-left">Estado</th>
                    <th className="px-6 py-3 text-left">Plazo</th>
                    </tr>
                    </thead>

                <tbody>
                  {employees.map((employee) => (
                    <tr 
                      key={employee.id} 
                      className={`border-b transition-all ${isDarkMode ? 'hover:bg-purple-600' : 'hover:bg-purple-100'}`}
                    >
                      <td className="px-6 py-4">{employee.nombre}</td>
                      <td className="px-6 py-4">{employee.rol}</td>
                      <td className="px-6 py-4">{employee.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className={`rounded-lg shadow-md overflow-hidden ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white'}`}>
            <div className="bg-blue-450 px-6 py-4 border-b"> {/* Aquí se cambió a fondo blanco */}
              <h2 className="text-xl font-semibold flex items-center">
                <ClipboardList className="mr-3 h-5 w-5" />
                Tareas
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-blue-450 text-black-500 text-sm"> {/* Fondo blanco para la cabecera */}
                    <th className="px-6 py-3 text-left">Título</th>
                    <th className="px-6 py-3 text-left">Estado</th>
                    <th className="px-6 py-3 text-left">Plazo</th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.map((task) => (
                    <tr 
                      key={task.id} 
                      className={`border-b transition-all ${isDarkMode ? 'hover:bg-blue-300' : 'hover:bg-yellow-100'}`}
                    >
                      <td className="px-6 py-4">{task.titulo}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(task.estado)}`}>
                          {task.estado}
                        </span>
                      </td>
                      <td className="px-6 py-4">{task.plazo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
