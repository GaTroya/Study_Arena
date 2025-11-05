const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_trivia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id_trivia",
      autoIncrement: false,
      references: {
        key: "id_trivia",
        model: "trivia_model"
      }
    },
    id_pregunta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id_pregunta",
      autoIncrement: false,
      references: {
        key: "id_pregunta",
        model: "pregunta_model"
      }
    }
  };
  const options = {
    tableName: "trivia_pregunta",
    comment: "",
    indexes: []
  };
  const TriviaPreguntaModel = sequelize.define("trivia_pregunta_model", attributes, options);
  return TriviaPreguntaModel;
};