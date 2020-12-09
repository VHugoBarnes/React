const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');

// Crear el servidor de express
const app = express();

// Conexión a base de datos
dbConnection();

// CORS
app.use(cors());

// Directorio público
app.use(express.static('public'));

// Lectura y parseo de body
app.use( express.json() );

// Rutas
app.use('/api/auth', require('./routes/auth')); // Todo lo que el archivo vaya exportar, lo habilitará en la ruta
app.use('/api/events', require('./routes/events'));

// Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Server en puerto ${process.env.PORT}`);
});