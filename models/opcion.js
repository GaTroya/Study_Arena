const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  const attributes = {
    id_opcion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id_opcion",
      autoIncrement: true,
    },
    texto_opcion: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "texto_opcion",
      autoIncrement: false,
    },
    id_pregunta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "id_pregunta",
      autoIncrement: false,
      references: {
        key: "id_pregunta",
        model: "pregunta_model",
      },
    },
    es_correcta: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "es_correcta",
      autoIncrement: false,
    },
  };
  const options = {
    tableName: "opcion",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: "public",
  };
  const OpcionModel = sequelize.define("opcion_model", attributes, options);
  return OpcionModel;
};
