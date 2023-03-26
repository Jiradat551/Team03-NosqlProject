const express = require("express");
const router = express.Router();
const StudentModel = require("../models/Student");
const achiveModel = require("../models/Achive");

router.get("/", async (req, res) => {
    achiveModel.find((error, data) => {
    if (error) {
      res.status(500).send("Error");
    } else {
      res.status(200).send(data);
    }
  });
});

router.get("/Achievement", async (req, res) => {
    achiveModel.aggregate()
    .project({  achiveNames: 1 , score:1})
    .then((result, error) => {
        if (result)
            res.status(200).send(result);
        else
            res.status(500).send("Error")
    })
});

router.post("/create", async (req, res) => {
  achiveModel.create(req.body, (error, data) => {
    if (error) {
      res.status(500).send("Error");
    } else {
      res.status(200).send(data);
    }
  });
});

router.get("/Achievement1", async (req, res) => {});

module.exports = router;
