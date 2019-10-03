const { Ticket } = require("../models/ticket");
const express = require("express");
const router = express.Router();

//ROUTERS

//Get all tickets
router.get("/", async (req, res) => {
  const tickets = await Ticket.find();
  res.send(tickets);
});

//Search by id and returns info about tickets
router.get("/:id", async (req, res) => {
  const tickets = await Ticket.find({
    _id: req.params.id
  });
  if (!tickets)
    return res
      .status(404)
      .send("There is no tickets with this id in DB.");
  res.send(tickets);
});

//Add a new ticket
router.post("/", async (req, res) => {
  ticket = new Ticket(req.body);
  ticket = await ticket.save();

  res.send(ticket);
});

module.exports = router;
