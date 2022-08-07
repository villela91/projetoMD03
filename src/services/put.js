function putSeries(id, object) {
  const MFseries = require("../mocks/series");

  let series;

  for (let i of MFseries) {
    if (i.id === id) {
      series = i;
      //         id: "1",
      //   nome:    "HIMYM",
      //   ano: "2005",
      //   temporadas:9,
      //   genero: "sitcom",
      //   elenco:["",""]
      series.nome = object.nome == undefined ? series.nome : object.nome;
      series.ano = object.ano == undefined ? series.ano : object.ano;
      series.temporadas =
        object.temporadas == undefined ? series.temporadas : object.temporadas;
      series.genero =
        object.genero == undefined ? series.genero : object.genero;
      series.elenco =
        object.elenco == undefined ? series.elenco : object.elenco;

      const localiza = MFseries.indexOf(i);
      MFseries.splice(localiza, 1, series);
      return MFseries;
    }
  }
  return "não encontrado";
}
module.exports = putSeries;
