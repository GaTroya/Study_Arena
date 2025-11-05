const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id_usuario",
      autoIncrement: true
    },
    nombre_usuario: {
      type: DataTypes.CHAR(100),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "nombre_usuario",
      autoIncrement: false,
      unique: "usuario_nombre_usuario_key"
    },
    correo: {
      type: DataTypes.CHAR(255),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "correo",
      autoIncrement: false,
      unique: "usuario_correo_key"
    },
    contrasena: {
      type: DataTypes.CHAR(255),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "contrasena",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "usuario",
    comment: "",
    indexes: []
  };
  const UsuarioModel = sequelize.define("usuario_model", attributes, options);
  return UsuarioModel;
};