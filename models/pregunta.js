const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  const attributes = {
    id_pregunta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id_pregunta",
      autoIncrement: true,
    },
    texto_pregunta: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "texto_pregunta",
      autoIncrement: false,
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
        model: "usuario_model",
      },
    },
  };
  const options = {
    tableName: "pregunta",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: "public",
  };
  const PreguntaModel = sequelize.define("pregunta_model", attributes, options);
  return PreguntaModel;
};
