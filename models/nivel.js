const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  const attributes = {
    id_nivel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id_nivel",
      autoIncrement: true,
    },
    nombre_nivel: {
      type: DataTypes.CHAR(100),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "nombre_nivel",
      autoIncrement: false,
      unique: "nivel_nombre_nivel_key",
    },
    puntos_minimos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "puntos_minimos",
      autoIncrement: false,
    },
  };
  const options = {
    tableName: "nivel",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: "public",
  };
  const NivelModel = sequelize.define("nivel_model", attributes, options);
  return NivelModel;
};
