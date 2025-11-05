const apuntes = require("../models").apuntes_model;
module.exports = {
  list(req, res) {
    return apuntes
      .findAll({})
      .then((apuntes) => res.status(200).send(apuntes))
      .catch((error) => {
        res.status(400).send(error);
      });
  },
};
