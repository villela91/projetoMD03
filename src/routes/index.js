const express = require("express");
const app = express();
const cors = require("cors");

const MFseries = require("../mocks/series");
const {
  searchControllers,
  deletecontrollers,
  putControllers,
  postCotrollers,
  getAllcontrollers,
} = require("../controllers/series.controllers");

const connectTodatabase = require("../database/database");
connectTodatabase();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.get("/", getAllcontrollers);

app.delete("/delete/:id", deletecontrollers);

app.get("/search/:id", searchControllers);

app.put("/put/:id", putControllers);

app.post("/post", postCotrollers);

app.listen(port, function () {
  console.log("http://localhost:3000");
});
