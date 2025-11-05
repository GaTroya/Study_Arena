const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  const attributes = {
    id_trivia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id_trivia",
      autoIncrement: true,
    },
    titulo: {
      type: DataTypes.CHAR(150),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "titulo",
      autoIncrement: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "descripcion",
      autoIncrement: false,
    },
    dificultad: {
      type: DataTypes.CHAR(50),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "dificultad",
      autoIncrement: false,
    },
    categoria: {
      type: DataTypes.CHAR(50),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "categoria",
      autoIncrement: false,
    },
    id_nivel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "id_nivel",
      autoIncrement: false,
      references: {
        key: "id_nivel",
        model: "nivel_model",
      },
    },
  };
  const options = {
    tableName: "trivia",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: "public",
  };
  const TriviaModel = sequelize.define("trivia_model", attributes, options);
  return TriviaModel;
};
