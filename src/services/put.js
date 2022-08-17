
const seriesmodel = require("../models/models");
async function putSeries(id, object) {
  return await seriesmodel.findOneAndUpdate({ id: id }, object);
}

module.exports = putSeries;
