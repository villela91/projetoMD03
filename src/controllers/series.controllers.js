const deleteSeries = require("../services/delete");
const getId = require("../services/getId");
const MFseries = require("../mocks/series");
const putSeries = require("../services/put");
const postSeries = require("../services/post");

const deletecontrollers = (req, res) => {
  const id = req.params.id;
  res.send(deleteSeries(id));
};

const searchControllers = (req, res) => {
  const id = req.params.id;
  res.send(getId(id));
};

const putControllers = (req, res) => {
  const id = req.params.id;
  res.send(
    putSeries(id, {
      nome: req.body.nome,
      ano: req.body.ano,
      temporada: req.body.temporada,
      genero: req.body.genero,
      elenco: req.body.elenco,
    })
  );
};
const postCotrollers = (req, res) => {
  res.send(
    postSeries({
      nome: req.body.nome,
      ano: req.body.ano,
      temporada: req.body.temporada,
      genero: req.body.genero,

      elenco: req.body.elenco,
    })
  );
};

module.exports = {
  searchControllers,
  deletecontrollers,
  putControllers,
  postCotrollers,
};
