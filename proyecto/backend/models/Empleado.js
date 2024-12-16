import db from '../config/db';

class Empleado {
  async getAllEmpleados() {
    const [empleados] = await db.execute('SELECT * FROM empleados');
    return empleados;
  }

  async getEmpleadoById(id) {
    const [empleado] = await db.execute('SELECT * FROM empleados WHERE id = ?', [id]);
    return empleado;
  }

  async createEmpleado(nombre, rolId) {
    const [result] = await db.execute('INSERT INTO empleados (nombre, rol_id) VALUES (?, ?)', [nombre, rolId]);
    return result;
  }
}

export default Empleado;