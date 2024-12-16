import React from 'react';
import mision from '../imagenes/mision.png';
import vision from '../imagenes/vision.jpg';

// Estilos en línea dentro del archivo JS
const styles = {
  aboutContainer: {
    padding: '2rem',
    backgroundColor: '#f4f4f9',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    margin: '2rem auto',
    maxWidth: '1000px',
  },
  title: {
    fontSize: '3rem',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: '2rem',
  },
  section: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '2rem',
  },
  textSection: {
    flex: 1,
    padding: '0 1rem',
  },
  imageSection: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    fontSize: '1.25rem',
    color: '#34495e',
    lineHeight: '1.6',
  },
  image: {
    width: '80%',
    borderRadius: '8px',
  },
  subTitle: {
    fontSize: '2rem',
    color: '#2c3e50',
    marginBottom: '1rem',
  },
};

function About() {
  return (
    <div style={styles.aboutContainer}>
      <h1 style={styles.title}>Acerca de Nosotros</h1>
      
      <div style={styles.section}>
        <div style={styles.textSection}>
          <h2 style={styles.subTitle}>Nuestra Misión</h2>
          <p style={styles.description}>
            Somos una empresa comprometida con el futuro del trabajo. Nos dedicamos a conectar
            profesionales con empresas que buscan talento remoto. Nuestra misión es ofrecer un
            entorno flexible, donde cada persona pueda desarrollar su potencial desde cualquier
            lugar del mundo.
          </p>
        </div>
        <div style={styles.imageSection}>
          <img 
            src= {mision}
            alt="Misión" 
            style={styles.image} 
          />
        </div>
      </div>

      <div style={styles.section}>
        <div style={styles.imageSection}>
          <img 
            src={vision}
            alt="Visión" 
            style={styles.image} 
          />
        </div>
        <div style={styles.textSection}>
          <h2 style={styles.subTitle}>Nuestra Visión</h2>
          <p style={styles.description}>
            Creemos en la importancia de la productividad sin barreras geográficas, brindando
            herramientas y soporte para que nuestros usuarios tengan una experiencia eficiente y
            enriquecedora en el teletrabajo.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
