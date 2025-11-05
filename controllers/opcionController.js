const opcion = require("../models").opcion_model;
module.exports = {
  list(req, res) {
    return opcion
      .findAll({})
      .then((opcion) => res.status(200).send(opcion))
      .catch((error) => {
        res.status(400).send(error);
      });
  },
};
