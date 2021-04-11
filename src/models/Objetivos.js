'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Objetivos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Objetivos.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    image: DataTypes.STRING,
    estado: DataTypes.STRING,
    usuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Objetivos',
  });
  return Objetivos;
};