import React, { useState } from "react";

const Tasks = () => {
  // Estado para las tareas
  const [tasks, setTasks] = useState([
    { id: 1, name: "Implementar Dashboard", start: "08:00", end: "10:00", status: "En Progreso" },
    { id: 2, name: "Diseñar Logo", start: "11:00", end: "13:00", status: "Pendiente" },
    { id: 3, name: "Reunión de Proyecto", start: "11:00", end: "13:00", status: "Completada" },
  ]);

  const [newTask, setNewTask] = useState({
    name: "",
    start: "",
    end: "",
    status: "Pendiente",
  });

  // Estado para los empleados
  const [employees, setEmployees] = useState([
    { id: 1, name: "Juan Perez", attendance: "Presente", role: "Desarrollador", acceptedTasks: 3 },
    { id: 2, name: "Maria Lopez", attendance: "Ausente", role: "Diseñadora", acceptedTasks: 5 },
  ]);

  const [newEmployee, setNewEmployee] = useState({
    name: "",
    attendance: "Presente",
    role: "",
    acceptedTasks: 0,
  });

  const addTask = () => {
    const totalHours = calculateTotalHours(newTask.start, newTask.end);
    setTasks([
      ...tasks,
      { ...newTask, id: tasks.length + 1, totalHours: totalHours },
    ]);
    setNewTask({ name: "", start: "", end: "", status: "Pendiente" });
  };

  const addEmployee = () => {
    setEmployees([
      ...employees,
      { ...newEmployee, id: employees.length + 1 },
    ]);
    setNewEmployee({ name: "", attendance: "Presente", role: "", acceptedTasks: 0 });
  };

  const calculateTotalHours = (start, end) => {
    const startTime = new Date(`2023-01-01T${start}`);
    const endTime = new Date(`2023-01-01T${end}`);
    const diff = (endTime - startTime) / (1000 * 60 * 60);
    return diff > 0 ? diff : 0;
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}> {/* Espaciado para evitar conflicto con el Navbar */}
        <div style={styles.box}>
          <h2 style={styles.title}>Tareas</h2>
          <table style={styles.table}>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Hora de Inicio</th>
                <th>Hora de Fin</th>
                <th>Total de Horas</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id}>
                  <td>{task.name}</td>
                  <td>{task.start}</td>
                  <td>{task.end}</td>
                  <td>{task.totalHours || "-"}</td>
                  <td>{task.status}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>Crear Tarea</h3>
          <div style={styles.form}>
            <input
              style={styles.input}
              type="text"
              placeholder="Nombre de la tarea"
              value={newTask.name}
              onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
            />
            <input
              style={styles.input}
              type="time"
              value={newTask.start}
              onChange={(e) => setNewTask({ ...newTask, start: e.target.value })}
            />
            <input
              style={styles.input}
              type="time"
              value={newTask.end}
              onChange={(e) => setNewTask({ ...newTask, end: e.target.value })}
            />
            <button style={styles.button} onClick={addTask}>
              Agregar Tarea
            </button>
          </div>
        </div>

        <div style={styles.box}> {/* Caja separada para empleados */}
          <h2 style={styles.title}>Gestión de Empleados</h2>
          <table style={styles.table}>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Asistencia</th>
                <th>Rol/Cargo</th>
                <th>Tareas Aceptadas</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.name}</td>
                  <td>{employee.attendance}</td>
                  <td>{employee.role}</td>
                  <td>{employee.acceptedTasks}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>Agregar Empleado</h3>
          <div style={styles.form}>
            <input
              style={styles.input}
              type="text"
              placeholder="Nombre del empleado"
              value={newEmployee.name}
              onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
            />
            <select
              style={styles.input}
              value={newEmployee.attendance}
              onChange={(e) => setNewEmployee({ ...newEmployee, attendance: e.target.value })}
            >
              <option value="Presente">Presente</option>
              <option value="Ausente">Ausente</option>
            </select>
            <input
              style={styles.input}
              type="text"
              placeholder="Rol/Cargo"
              value={newEmployee.role}
              onChange={(e) => setNewEmployee({ ...newEmployee, role: e.target.value })}
            />
            <input
              style={styles.input}
              type="number"
              placeholder="Tareas aceptadas"
              value={newEmployee.acceptedTasks}
              onChange={(e) => setNewEmployee({ ...newEmployee, acceptedTasks: parseInt(e.target.value) || 0 })}
            />
            <button style={styles.button} onClick={addEmployee}>
              Agregar Empleado
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f0f0f0",
      paddingTop: "0px", // Ajuste para evitar conflicto con el Navbar
    },
    wrapper: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between", // Espaciado entre las cajas
      alignItems: "flex-start",
      gap: "20px",
      flexWrap: "nowrap", // Evita que las cajas se apilen
    },
    box: {
      backgroundColor: "#ffffff",
      padding: "20px",
      borderRadius: "20px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      width: "48%", // Ocupa un 48% del ancho para dejar espacio entre ambas cajas
      maxWidth: "800px",
    },
    title: {
      textAlign: "center",
      color: "#333",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginBottom: "20px",
    },
    th: {
      backgroundColor: "#007BFF",
      color: "#ffffff",
      padding: "10px",
      textAlign: "left",
    },
    td: {
      padding: "10px",
      borderBottom: "1px solid #ddd",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    input: {
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
    },
    button: {
      padding: "10px",
      backgroundColor: "#007BFF",
      color: "#ffffff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontWeight: "bold",
    },
  };

export default Tasks;
