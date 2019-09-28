const { Programme } = require("../models/programme");
const express = require("express");
const router = express.Router();

//ROUTERS

//Get all programmes
router.get("/", async (req, res) => {
  const programmes = await Programme.find();
  res.send(programmes);
});

//Search programmes by movie id and returns programmes info
router.get("/:movie_id", async (req, res) => {
  const programmes = await Programme.find({ movie_id: req.params.movie_id });
  if (!programmes)
    return res
      .status(404)
      .send("There is no programme with this movie id in DB.");
  res.send(programmes);
});

//Add a new programme, movie id should be passed
router.post("/", async (req, res) => {
  programme = new Programme(req.body);
  programme = await programme.save();

  res.send(programme);
});

module.exports = router;
