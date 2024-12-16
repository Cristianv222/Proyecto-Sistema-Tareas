import db from '../config/db';

class Rol {
  async getAllRoles() {
    const [roles] = await db.execute('SELECT * FROM roles');
    return roles;
  }

  async getRolById(id) {
    const [rol] = await db.execute('SELECT * FROM roles WHERE id = ?', [id]);
    return rol;
  }

  async createRol(nombre) {
    const [result] = await db.execute('INSERT INTO roles (nombre) VALUES (?)', [nombre]);
    return result;
  }
}

export default Rol;