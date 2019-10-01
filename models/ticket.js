const mongoose = require("mongoose");

//MODEL
const ticketSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["Normalny", "Dziecko", "Uczeń", "Senior"]
  },
  price: Number
});

const Ticket = mongoose.model("Ticket", ticketSchema);

exports.Ticket = Ticket;
