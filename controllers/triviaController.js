const trivia = require("../models").trivia_model;
module.exports = {
  list(req, res) {
    return trivia
      .findAll({})
      .then((trivia) => res.status(200).send(trivia))
      .catch((error) => {
        res.status(400).send(error);
      });
  },
};
