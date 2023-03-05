const express = require("express");
const router = express.Router();

const { tickets } = require("../shared/db");

router.get("/", async (req, res) => {
  console.log("get all Students");
  try {
    const data = await tickets.find();
    res.send(data);
  } catch (e) {
    res.send(e);
  }
});

router.post("/", async (req, res) => {
  console.log("Student create route");
  try {
    const data = await tickets.create({
      movie: req.body.movie,
      slot: req.body.slot,
      seats: req.body.seats,
      
    });
    res.send(data);
  } catch (e) {
    console.log(e.message, "error");
    res.status(500).send("Error in student POST");
  }
});

module.exports = router;
