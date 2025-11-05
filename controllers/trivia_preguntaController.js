const trivia_pregunta = require("../models").trivia_pregunta_model;
module.exports = {
  list(req, res) {
    return trivia_pregunta
      .findAll({})
      .then((trivia_pregunta) => res.status(200).send(trivia_pregunta))
      .catch((error) => {
        res.status(400).send(error);
      });
  },
};
