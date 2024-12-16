import db from '../config/db';
import Empleado from '../models/Empleado';
import Rol from '../models/Rol';

class AuthController {
  async login(req, res) {
    const { nombre, password } = req.body;
    const empleado = await Empleado.getEmpleadoByNombre(nombre);
    if (!empleado) {
      return res.status(401).json({ message: 'Empleado no encontrado' });
    }
    const rol = await Rol.getRolById(empleado.rol_id);
    if (!rol) {
      return res.status(401).json({ message: 'Rol no encontrado' });
    }
    // Verificar contraseña
    const isValidPassword = await this.verifyPassword(password, empleado.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }
    // Generar token de autenticación
    const token = await this.generateToken(empleado);
    return res.json({ token });
  }

  async register(req, res) {
    const { nombre, password, rolId } = req.body;
    const empleado = await Empleado.createEmpleado(nombre, rolId);
    if (!empleado) {
      return res.status(500).json({ message: 'Error al crear empleado' });
    }
    // Encriptar contraseña
    const hashedPassword = await this.hashPassword(password);
    await Empleado.updateEmpleado(empleado.id, { password: hashedPassword });
    // Generar token de autenticación
    const token = await this.generateToken(empleado);
    return res.json({ token });
  }

  async verifyPassword(password, hashedPassword) {
    // Implementar función para verificar contraseña
  }

  async hashPassword(password) {
    // Implementar función para encriptar contraseña
  }

  async generateToken(empleado) {
    // Implementar función para generar token de autenticación
  }
}

export default AuthController;
