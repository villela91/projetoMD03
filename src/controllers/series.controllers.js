const deleteSeries = require("../services/delete");
const getId = require("../services/getId");
const MFseries = require("../mocks/series");
const putSeries = require("../services/put");
const postSeries = require("../services/post");
const getAll = require("../services/getAll");

const getAllcontrollers = async (req, res) => {
  res.send(getAll());
};
const deletecontrollers = async (req, res) => {
  const id = req.params.id;
  res.send(deleteSeries(id));
};

const searchControllers = async (req, res) => {
  const id = req.params.id;
  res.send(getId(id));
};

const putControllers = async (req, res) => {
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
const postCotrollers = async (req, res) => {
  res.send(
    postSeries({
      nome: req.body.nome,
      ano: req.body.ano,
      temporadas: req.body.temporada,
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
  getAllcontrollers,
};
