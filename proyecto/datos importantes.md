IMPORTANTE 
para poder hacer correr el servidor se debe de poner este comando en una terminal

->cd proyecto
->npm run dev 



CREATE DATABASE empresa_tareas;

USE empresa_tareas;

-- Tabla de empleados
CREATE TABLE empleados (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    rol VARCHAR(50) NOT NULL,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de tareas
CREATE TABLE tareas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    descripcion TEXT,
    plazo DATE NOT NULL,
    id_empleado INT,
    estado ENUM('Pendiente', 'En Progreso', 'Completada') DEFAULT 'Pendiente',
    FOREIGN KEY (id_empleado) REFERENCES empleados(id)
);

-- Tabla de asistencia
CREATE TABLE asistencia (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_empleado INT,
    hora_inicio DATETIME NOT NULL,
    hora_fin DATETIME,
    FOREIGN KEY (id_empleado) REFERENCES empleados(id)
);

-- Tabla de reportes
CREATE TABLE reportes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_empleado INT,
    horas_trabajadas INT,
    tareas_completadas INT,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_empleado) REFERENCES empleados(id)
);
proyecto/
├── backend/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── userController.js
│   │   └── otherControllers.js
│   ├── models/
│   │   ├── User.js
│   │   └── otherModels.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── userRoutes.js
│   │   └── otherRoutes.js
│   ├── config/
│   │   ├── db.js
│   │   └── config.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── otherMiddleware.js
│   ├── utils/
│   │   ├── jwt.js
│   │   └── otherUtils.js
│   └── server.js
└── frontend/
    ├── src/
    │   ├── pages/
    │   │   ├── Login.jsx
    │   │   ├── Register.jsx
    │   │   ├── Dashboard.jsx
    │   │   └── otherPages.jsx
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   ├── Sidebar.jsx
    │   │   └── otherComponents.jsx
    │   ├── hooks/
    │   │   ├── useAuth.js
    │   │   └── otherHooks.js
    │   ├── services/
    │   │   ├── authService.js
    │   │   ├── userService.js
    │   │   └── otherServices.js
    │   ├── utils/
    │   │   ├── api.js
    │   │   └── otherUtils.js
    │   ├── styles/
    │   │   └── styles.css
    │   ├── App.jsx
    │   └── main.jsx
    ├── index.html
    ├── package.json
    ├── vite.config.js
    └── tailwind.config.js


para todo lo visual deberiamos utilizar tailwind
-> deberias descargarlo primero con esto:

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

->para la configuracion deberian poner esto:

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

->esto añadir en el 