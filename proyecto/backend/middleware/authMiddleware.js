import jwt from 'jsonwebtoken';
import pool from '../config/db.js'; // Configuración de conexión a la base de datos

// Validar el registro
export const validateRegister = (req, res, next) => {
  const { nombre, password } = req.body;

  // Verificar que ambos campos sean proporcionados
  if (!nombre || !password) {
    return res.status(400).json({ message: 'El nombre y la contraseña son obligatorios' });
  }

  // Verificar que la contraseña tenga al menos 6 caracteres
  if (password.length < 6) {
    return res.status(400).json({ message: 'La contraseña debe tener al menos 6 caracteres' });
  }

  next();
};

// Validar el login
export const validateLogin = (req, res, next) => {
  const { id, password } = req.body;

  // Verificar que ambos campos sean proporcionados
  if (!id || !password) {
    return res.status(400).json({ message: 'El ID y la contraseña son obligatorios' });
  }

  next();
};

// Middleware para autenticación
export const authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'No hay token, autorización denegada' });
  }

  try {
    // Verificar el token y extraer el ID del empleado
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id } = decoded;

    // Consultar en la base de datos para obtener la información del empleado
    const [rows] = await pool.query('SELECT * FROM empleados WHERE id = ?', [id]);

    if (rows.length === 0) {
      return res.status(404).json({ message: 'Empleado no encontrado' });
    }

    // Agregar la información del empleado al objeto req.user
    req.user = rows[0];
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: 'Token no válido' });
  }
};

export default authMiddleware;