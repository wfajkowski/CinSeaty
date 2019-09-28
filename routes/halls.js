const { Hall } = require("../models/hall");
const express = require("express");
const router = express.Router();

//ROUTERS

//Get all halls
router.get("/", async (req, res) => {
  const halls = await Hall.find();
  res.send(halls);
});

//Search all hall seats by hall id and return all hall seats
router.get("/:hall_id", async (req, res) => {
  const halls = await Hall.find({ hall_id: req.params.hall_id });
  if (!halls)
    return res
      .status(404)
      .send("There is no hall seats with this hall id in DB.");
  res.send(halls);
});

//Add a new hall seat
router.post("/", async (req, res) => {
  hall = new Hall(req.body);
  hall = await hall.save();

  res.send(hall);
});

module.exports = router;
