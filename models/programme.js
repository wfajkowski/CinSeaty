const mongoose = require("mongoose");

//MODEL
const programmeSchema = new mongoose.Schema({
  movie_id: String,
  time: Date
});

const Programme = mongoose.model("Programme", programmeSchema);

exports.Programme = Programme;
