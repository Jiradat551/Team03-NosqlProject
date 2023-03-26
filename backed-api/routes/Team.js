const express = require("express");
const router = express.Router();

const TeamModel = require("../models/Team");
router.get("/", async (req, res) => {
    TeamModel.find((error, data) => {
    if (error) {
      res.status(500).send("Error");
    } else {
      res.status(200).send(data);
    }
  });
});

router.get("/Achievement", async (req, res) => {
    TeamModel.aggregate()
    .project({  achiveNames: 1 , score:1})
    .then((result, error) => {
        if (result)
            res.status(200).send(result);
        else
            res.status(500).send("Error")
    })
});

router.post("/create", async (req, res) => {
    TeamModel.create(req.body, (error, data) => {
    if (error) {
      res.status(500).send("Error");
    } else {
      res.status(200).send(data);
    }
  });
});

router.get("/Achievement1", async (req, res) => {});

module.exports = router;
