function deleteSeries(id) {
  const MFseries = require("../mocks/series");

  for (let i of MFseries) {
    if (i.id === id) {
      const localiza = MFseries.indexOf(i);
      MFseries.splice(localiza, 1);
      return MFseries;
    }
  }
  return "não encontrado";
}
module.exports = deleteSeries;
