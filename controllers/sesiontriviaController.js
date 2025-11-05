const sesiontrivia = require("../models").sesiontrivia_model;
module.exports = {
  list(req, res) {
    return sesiontrivia
      .findAll({})
      .then((sesiontrivia) => res.status(200).send(sesiontrivia))
      .catch((error) => {
        res.status(400).send(error);
      });
  },
};
