function postSeries(object) {
  const MFseries = require("../mocks/series");
  let number = 1;
  const newSeries = object;
  post: while (true) {
    for (let i of MFseries) {
      if (Number(i.id) === number) {
        number++;

        continue post;
      }
    }
    break;
  }
newSeries.id = number.toString();

  MFseries.push(newSeries);
  return MFseries;
}
module.exports = postSeries;
