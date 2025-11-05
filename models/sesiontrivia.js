const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_sesion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id_sesion",
      autoIncrement: true
    },
    fecha_sesion: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      comment: null,
      primaryKey: false,
      field: "fecha_sesion",
      autoIncrement: false
    },
    puntaje_obtenido: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "puntaje_obtenido",
      autoIncrement: false
    },
    tiempo_usado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "tiempo_usado",
      autoIncrement: false
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "id_usuario",
      autoIncrement: false,
      references: {
        key: "id_usuario",
        model: "usuario_model"
      }
    },
    id_trivia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "id_trivia",
      autoIncrement: false,
      references: {
        key: "id_trivia",
        model: "trivia_model"
      }
    }
  };
  const options = {
    tableName: "sesiontrivia",
    comment: "",
    indexes: []
  };
  const SesiontriviaModel = sequelize.define("sesiontrivia_model", attributes, options);
  return SesiontriviaModel;
};