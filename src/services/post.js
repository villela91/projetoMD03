const { models } = require("mongoose");
const modelsSeries = require("../models/models");
function postSeries(object) {
  console.log(object);
  const newMFseries = new modelsSeries({ ...object });
  return newMFseries.save();
}



module.exports = postSeries;
