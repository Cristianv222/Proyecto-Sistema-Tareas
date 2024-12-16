import db from "./config/db";
//Hacer una consulta simple a la base de datos
connection.query('SELECT 1 + 1 AS solution', (err, results) => {
  if (err) {
    console.error('Error en la consulta:', err);
  } else {
    console.log('La prueba de la base de datos fue exitosa:', results[0].solution); // Debería devolver 2
  }
  // Cerrar la conexión después de la prueba
  connection.end();
});