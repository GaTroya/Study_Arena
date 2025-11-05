const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_inventario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id_inventario",
      autoIncrement: true
    },
    nombre_objeto: {
      type: DataTypes.CHAR(100),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "nombre_objeto",
      autoIncrement: false
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "cantidad",
      autoIncrement: false
    },
    precio: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "precio",
      autoIncrement: false
    },
    id_pregunta: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "id_pregunta",
      autoIncrement: false,
      references: {
        key: "id_pregunta",
        model: "pregunta_model"
      }
    }
  };
  const options = {
    tableName: "inventario",
    comment: "",
    indexes: []
  };
  const InventarioModel = sequelize.define("inventario_model", attributes, options);
  return InventarioModel;
};