const { Sequelize, DataTypes } = require('sequelize');
const config = require('../../config/database');
const db = {};

db.connection = new Sequelize(config.database, config.username, config.password, config);
db.Usuarios = require('../models/usuarios')(db.connection, DataTypes)

///Asociaciones
db.Usuarios.associate(db);

module.exports = db;
