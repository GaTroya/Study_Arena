const transaccion = require("../models").transaccion_model;
module.exports = {
  list(req, res) {
    return transaccion
      .findAll({})
      .then((transaccion) => res.status(200).send(transaccion))
      .catch((error) => {
        res.status(400).send(error);
      });
  },
};
