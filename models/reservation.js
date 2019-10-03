const mongoose = require("mongoose");

//MODEL
const reservationSchema = new mongoose.Schema({
  programme_id: String,
  hall_id: String,
  seats: Object,
  reservation_nr: String,
  title: String,
  date: String,
  time: String,
  datetime: Date,
  name: {
    type: String,
    minlength: 3,
    maxlength: 30
  },
  surname: {
    type: String,
    minlength: 3,
    maxlength: 50
  },
  email: {
    type: String,
    minlength: 5,
    maxlength: 250
  },
  telephone: {
    type: String,
    minlength: 6,
    maxlength: 20
  },
  active: Boolean
});

const Reservation = mongoose.model("Reservation", reservationSchema);

exports.Reservation = Reservation;
