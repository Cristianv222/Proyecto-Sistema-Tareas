import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { executeQuery } from '../config/db.js';

export const register = async (req, res) => {
  try {
    const { nombre, password, rol } = req.body;

    // Verificar si el usuario ya existe
    const existingUser = await executeQuery(
      'SELECT * FROM empleados WHERE nombre = ?', 
      [nombre]
    );

    if (existingUser.length > 0) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }

    // Hashear la contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insertar nuevo empleado
    const result = await executeQuery(
      'INSERT INTO empleados (nombre, password, rol_id) VALUES (?, ?, ?)',
      [nombre, hashedPassword, rol]
    );

    res.status(201).json({ 
      message: 'Usuario registrado exitosamente', 
      userId: result.insertId 
    });
  } catch (error) {
    res.status(500).json({ message: 'Error en el registro', error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { nombre, password } = req.body;

    // Buscar usuario
    const users = await executeQuery(
      'SELECT * FROM empleados WHERE nombre = ?', 
      [nombre]
    );

    if (users.length === 0) {
      return res.status(400).json({ message: 'Credenciales inválidas' });
    }

    const user = users[0];

    // Verificar contraseña
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Credenciales inválidas' });
    }

    // Generar token
    const token = jwt.sign(
      { id: user.id, nombre: user.nombre, rol_id: user.rol_id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ 
      token, 
      user: { 
        id: user.id, 
        nombre: user.nombre, 
        rol_id: user.rol_id 
      } 
    });
  } catch (error) {
    res.status(500).json({ message: 'Error en el inicio de sesión', error: error.message });
  }
};