const { Reservation } = require("../models/reservation");
const express = require("express");
const router = express.Router();

//ROUTERS

//Get all reservations
router.get("/", async (req, res) => {
  const reservations = await Reservation.find();
  res.send(reservations);
});

//Search by id and returns reservation info
router.get("/:id", async (req, res) => {
  const reservations = await Reservation.findById(req.params.id);
  if (!reservations)
    return res.status(404).send("There is no reservation with this id in DB.");
  res.send(reservations);
});

//Add a new reservation
router.post("/", async (req, res) => {
  reservation = new Reservation(req.body);
  reservation = await reservation.save();

  res.send(reservation);
});

module.exports = router;
