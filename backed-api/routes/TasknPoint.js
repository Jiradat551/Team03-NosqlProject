const express = require("express");
const router = express.Router();

const TasknPointModel = require("../models/TasknPoint");
router.get("/", async (req, res) => {
    TasknPointModel.find((error, data) => {
    if (error) {
      res.status(500).send("Error");
    } else {
      res.status(200).send(data);
    }
  });
});



router.post("/create", async (req, res) => {
    TasknPointModel.create(req.body, (error, data) => {
    if (error) {
      res.status(500).send("Error");
    } else {
      res.status(200).send(data);
    }
  });
});

router.get("/Achievement1", async (req, res) => {});

module.exports = router;
