const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  const attributes = {
    id_transaccion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id_transaccion",
      autoIncrement: true,
    },
    tipo: {
      type: DataTypes.CHAR(50),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "tipo",
      autoIncrement: false,
    },
    fecha_transaccion: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "fecha_transaccion",
      autoIncrement: false,
    },
    cantidad: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "cantidad",
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
    tableName: "transaccion",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: "public",
  };
  const TransaccionModel = sequelize.define(
    "transaccion_model",
    attributes,
    options
  );
  return TransaccionModel;
};
