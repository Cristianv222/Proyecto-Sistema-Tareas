import mysql from 'mysql2/promise';

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'empresa_tareas',
};

const db = mysql.createConnection(dbConfig);

try {
  const [results] = await db.execute('SELECT 1');
  console.log('Conexión establecida correctamente');
} catch (error) {
  console.error('Error al establecer la conexión:', error);
}
export default db;
