import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Token no proporcionado' });
  }
  try {
    const decoded = jwt.verify(token, 'tu_secret_key');
    req.empleado = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido' });
  }
};

export default authMiddleware;
