/* It's a route that will be called when the user accesses the url `http://localhost:3000/:nome` */
const express = require("express");
const app = express();
const cors = require("cors");

const MFseries = require("../mocks/series");
const {
  searchControllers,
  deletecontrollers,
  putControllers,
  postCotrollers,
} = require("../controllers/series.controllers");
// const deletecontrollers= require("../controllers/series.controllers")

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.get("/", function (req, res) {
  res.send(MFseries);
});

app.delete("/delete/:id", deletecontrollers);

app.get("/search/:id", searchControllers);

app.put("/put/:id", putControllers);

app.post("/post", postCotrollers);

app.listen(port, function () {
  console.log("http://localhost:3000");
});
