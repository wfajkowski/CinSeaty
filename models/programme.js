const mongoose = require("mongoose");

//MODEL
const programmeSchema = new mongoose.Schema({
  movie_id: String,
  hall_id: Number,
  time: Date
});

const Programme = mongoose.model("Programme", programmeSchema);

exports.Programme = Programme;
