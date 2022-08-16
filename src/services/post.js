const { models } = require("mongoose");
const modelsSeries = require ("../models/models");
function postSeries(object) {
 
//   let number = 1;
//   const newSeries = object;
//   post: while (true) {
//     for (let i of MFseries) {
//       if (Number(i.id) === number) {
//         number++;

//         continue post;
//       }
//     }
//     break;
//   }
// newSeries.id = number.toString();
console.log(object);
  const newMFseries = new modelsSeries({... object})
  return newMFseries.save();
  
}



module.exports = postSeries;
