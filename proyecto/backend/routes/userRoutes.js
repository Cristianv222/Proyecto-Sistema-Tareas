import express from 'express';
import authMiddleware from '../middleware/authMiddleware';

const router = express.Router();

// Ruta protegida que requiere autenticación
router.get('/profile', authMiddleware, (req, res) => {
  res.json({ message: 'Perfil de usuario', user: req.user });
});

export default Routes;
