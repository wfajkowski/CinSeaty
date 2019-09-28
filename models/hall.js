const mongoose = require("mongoose");

//MODEL
const hallSchema = new mongoose.Schema({
  hall_id: Number,
  seat_row: String,
  seat: Number,
  premium_type: Boolean,
  status: {
    type: String,
    enum: ["free", "reserved", "taken"]
  }
});

const Hall = mongoose.model("Hall", hallSchema);

exports.Hall = Hall;
