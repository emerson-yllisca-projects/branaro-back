const express = require('express');
const cors = require('cors');
const app = express();

//configuracion de cors
app.use(cors());
//lectura y parseo  de body
app.use(express.json());
//Directorio Publico
app.use(express.static('public'))
//Rutas
app.use('/api/branaro', require('../routes/index.routes'))
module.exports = app;