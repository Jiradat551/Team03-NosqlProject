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

router.get("/point", async (req, res) => {
  TeamModel.aggregate()
    .project({  TeamName: 1 , point:1})
    .then((result, error) => {
        if (result)
            res.status(200).send(result);
        else
            res.status(500).send("Error")
    })
});

router.get("/Achievement", async (req, res) => {
  TeamModel.aggregate()
    .project({ achiveNames: 1, score: 1 })
    .then((result, error) => {
      if (result) res.status(200).send(result);
      else res.status(500).send("Error");
    });
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

router.put("/update/:id", async (req, res) => {
  TeamModel.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    (error, data) => {
      if (error) {
        res.status(500).send("Error");
      } else {
        res.status(200).send(data);
      }
    }
  );
});

router.get("/:id", async (req, res) => {
  TeamModel.findById(req.params.id, (error, data) => {
    if (error) {
      res.status(500).send("Error");
    } else {
      res.status(200).send(data);
    }
  });
});

module.exports = router;
