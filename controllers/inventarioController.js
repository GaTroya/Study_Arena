const inventario = require("../models").inventario_model;
module.exports = {
  list(req, res) {
    return inventario
      .findAll({})
      .then((inventario) => res.status(200).send(inventario))
      .catch((error) => {
        res.status(400).send(error);
      });
  },
};
