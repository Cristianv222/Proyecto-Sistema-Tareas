import pool from './config/db.js'; // Asegúrate de tener la extensión '.js'

async function testConnection() {
    try {
        const [rows] = await pool.query('SELECT 1 + 1 AS result');
        console.log('Conexión exitosa con la base de datos');
        console.log('Resultado de la prueba:', rows[0].result);
    } catch (error) {
        console.error('Error al conectar con la base de datos:', error.message);
    }
}

testConnection();