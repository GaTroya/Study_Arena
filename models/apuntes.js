const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_apunte: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id_apunte",
      autoIncrement: true
    },
    titulo: {
      type: DataTypes.CHAR(150),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "titulo",
      autoIncrement: false
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "descripcion",
      autoIncrement: false
    },
    id_opcion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "id_opcion",
      autoIncrement: false,
      references: {
        key: "id_opcion",
        model: "opcion_model"
      }
    }
  };
  const options = {
    tableName: "apuntes",
    comment: "",
    indexes: []
  };
  const ApuntesModel = sequelize.define("apuntes_model", attributes, options);
  return ApuntesModel;
};