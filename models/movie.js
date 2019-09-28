const mongoose = require("mongoose");

//MODEL
const movieSchema = new mongoose.Schema({
  title: String,
  genre: String,
  duration: Number,
  lead: String,
  description: String,
  adult: Boolean,
  premiere: Date,
  production: String,
  photo: String,
  trailer: String
});

const Movie = mongoose.model("Movie", movieSchema);

exports.Movie = Movie;
