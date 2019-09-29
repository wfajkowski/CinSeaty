const { Movie } = require("../models/movie");
const express = require("express");
const router = express.Router();

//ROUTERS

//Get all movies
router.get("/", async (req, res) => {
  const movies = await Movie.find().sort("title");
  res.send(movies);
});

//Search movie by id
router.get("/:id", async (req, res) => {
  const movies = await Movie.findById(req.params.id);
  if (!movies)
    return res.status(404).send("There is no movie with this id in DB.");
  res.send(movies);
});

//Search movie by phrase (title, genre) - partial phrase case insensitive
router.post("/", async (req, res) => {
  console.log("^" + req.body.phrase + "$");
  let regexp = new RegExp(".*" + req.body.phrase + ".*", "i");
  let movies = await Movie.find({
    $or: [{ title: regexp }, { genre: regexp }]
  });
  if (movies.length === 0) return res.status(400).send("Movie not found");
  res.send(movies);
});

//Add a movie
router.put("/", async (req, res) => {
  let title = await Movie.findOne({
    title: req.body.title
  });
  if (title) return res.status(400).send("Movie already exists");

  movie = new Movie(req.body);
  movie = await movie.save();

  res.send(movie);
});

module.exports = router;
