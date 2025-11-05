const pregunta = require("../models").pregunta_model;
module.exports = {
  list(req, res) {
    return pregunta
      .findAll({})
      .then((pregunta) => res.status(200).send(pregunta))
      .catch((error) => {
        res.status(400).send(error);
      });
  },
};
