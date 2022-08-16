const seriesmodel = require("../models/models");
async function getAll() {
  return await seriesmodel.find();
}
module.exports = getAll;
