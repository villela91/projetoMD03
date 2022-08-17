const seriesmodel = require("../models/models");
async function getId(id) {
  return await seriesmodel.findOne({ id: id })
}
module.exports = getId;