const nivel = require("../models").nivel_model;
module.exports = {
  list(req, res) {
    return nivel
      .findAll({})
      .then((nivel) => res.status(200).send(nivel))
      .catch((error) => {
        res.status(400).send(error);
      });
  },
};
