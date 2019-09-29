const mongoose = require("mongoose");

//MODEL
const reservationSchema = new mongoose.Schema({
  programme_id: String,
  seat_id: String,
  ticket_id: Object,
  reservation_nr: String,
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
