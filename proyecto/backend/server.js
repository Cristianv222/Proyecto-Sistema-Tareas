import express from 'express';
import authRoutes from './routes/authRoutes.js'; 
import authMiddleware from './middleware/authMiddleware.js';

const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use(authMiddleware);

app.listen(3000, () => {
  console.log('Servidor escuchando en puerto 3000');
});

