'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Configuracion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Configuracion.init({
    razonSocial: DataTypes.STRING,
    ruc: DataTypes.STRING,
    logo: DataTypes.STRING,
    nosotros: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Configuracion',
  });
  return Configuracion;
};