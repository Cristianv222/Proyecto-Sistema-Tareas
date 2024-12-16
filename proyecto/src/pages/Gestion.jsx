import React, { useState, useEffect } from 'react';
import user from '../imagenes/user.png';
import { Trash2, Eye } from 'lucide-react';

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: '',
    startTime: '',
    endTime: '',
    totalHours: '',
    status: 'Pendiente',
  });

  useEffect(() => {
    const mockEmployees = [
      { id: 1, nombre: 'Juan Pérez', asistencia: 'Presente', rol: 'Desarrollador', tareasAceptadas: 3 },
      { id: 2, nombre: 'María López', asistencia: 'Ausente', rol: 'Diseñadora', tareasAceptadas: 5 },
    ];
    const mockTasks = [
      { id: 1, title: 'Implementar Dashboard', startTime: '08:00', endTime: '10:00', totalHours: '-', status: 'En Progreso' },
      { id: 2, title: 'Diseñar Logo', startTime: '11:00', endTime: '13:00', totalHours: '-', status: 'Pendiente' },
      { id: 3, title: 'Reunión de Proyecto', startTime: '11:00', endTime: '13:00', totalHours: '-', status: 'Completada' },
    ];
    setEmployees(mockEmployees);
    setTasks(mockTasks);
  }, []);

  const addTask = () => {
    let totalHours = '-';
    if (newTask.startTime && newTask.endTime) {
      const [startH, startM] = newTask.startTime.split(':');
      const [endH, endM] = newTask.endTime.split(':');
      const startTimeMinutes = parseInt(startH) * 60 + parseInt(startM);
      const endTimeMinutes = parseInt(endH) * 60 + parseInt(endM);
      totalHours = ((endTimeMinutes - startTimeMinutes) / 60).toFixed(2) + ' hrs';
    }

    const newTaskItem = {
      id: tasks.length + 1,
      title: newTask.title,
      startTime: newTask.startTime || '--:--',
      endTime: newTask.endTime || '--:--',
      totalHours,
      status: newTask.status,
    };

    setTasks([...tasks, newTaskItem]);
    setNewTask({ title: '', startTime: '', endTime: '', totalHours: '', status: 'Pendiente' });
  };

  const deleteTask = (taskId) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  };

  const deleteEmployee = (employeeId) => {
    const filteredEmployees = employees.filter((emp) => emp.id !== employeeId);
    setEmployees(filteredEmployees);
  };

  return (
    <div className="min-h-screen bg-blue-100 p-8">
      <div className="container mx-auto">
        {/* Panel Superior */}
        <div className="mb-8 shadow-md rounded-lg p-6 bg-white flex justify-between items-center">
          <h1 className="text-3xl font-bold">Panel de Gestión</h1>
          <img src={user} alt="Usuario" className="w-10 h-10 rounded-full border-2 border-blue-300" />
        </div>

        <div className="grid grid-cols-2 gap-8">
          {/* Tabla de Tareas */}
          <div className="rounded-lg shadow-md p-4 bg-white">
            <h2 className="text-xl font-semibold mb-4">Tareas</h2>
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="p-2 text-left">Nombre</th>
                  <th className="p-2">Hora de Inicio</th>
                  <th className="p-2">Hora de Fin</th>
                  <th className="p-2">Total de Horas</th>
                  <th className="p-2">Estado</th>
                  <th className="p-2">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task) => (
                  <tr key={task.id} className="border-b text-center">
                    <td className="p-2 text-left">{task.title}</td>
                    <td>{task.startTime}</td>
                    <td>{task.endTime}</td>
                    <td>{task.totalHours}</td>
                    <td>{task.status}</td>
                    <td>
                      <button onClick={() => deleteTask(task.id)} className="text-red-600 hover:text-red-800">
                        <Trash2 size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Formulario de Tareas */}
            <div className="mt-4">
              <input
                type="text"
                placeholder="Nombre de la tarea"
                className="border rounded p-2 w-full mb-2"
                value={newTask.title}
                onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
              />
              <div className="flex gap-2">
                <input
                  type="time"
                  className="border rounded p-2 w-1/2"
                  value={newTask.startTime}
                  onChange={(e) => setNewTask({ ...newTask, startTime: e.target.value })}
                />
                <input
                  type="time"
                  className="border rounded p-2 w-1/2"
                  value={newTask.endTime}
                  onChange={(e) => setNewTask({ ...newTask, endTime: e.target.value })}
                />
              </div>
              <button onClick={addTask} className="mt-4 w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
                Agregar Tarea
              </button>
            </div>
          </div>

          {/* Tabla de Empleados */}
          <div className="rounded-lg shadow-md p-4 bg-white">
            <h2 className="text-xl font-semibold mb-4">Gestión de Empleados</h2>
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="p-2 text-left">Nombre</th>
                  <th className="p-2">Asistencia</th>
                  <th className="p-2">Rol/Cargo</th>
                  <th className="p-2">Tareas Aceptadas</th>
                  <th className="p-2">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((emp) => (
                  <tr key={emp.id} className="border-b text-center">
                    <td className="p-2 text-left">{emp.nombre}</td>
                    <td>{emp.asistencia}</td>
                    <td>{emp.rol}</td>
                    <td>{emp.tareasAceptadas}</td>
                    <td>
                      <button
                        onClick={() => deleteEmployee(emp.id)}
                        className="text-red-600 hover:text-red-800 mr-2"
                      >
                        <Trash2 size={20} />
                      </button>
                      <button className="text-blue-600 hover:text-blue-800">
                        <Eye size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
