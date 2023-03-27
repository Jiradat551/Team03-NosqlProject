const express = require("express");
const router = express.Router();
const StudentModel = require("../models/Student");
const achiveModel = require("../models/Achive");

router.get("/", async (req, res) => {
  StudentModel.find((error, data) => {
    if (error) {
      res.status(500).send("Error");
    } else {
      res.status(200).send(data);
    }
  });
});
router.get("/role", async (req, res) => {
  StudentModel.findbyPosition((error, data) => {
    if (error) {
      res.status(500).send("Error");
    } else {
      res.status(200).send(data);
    }
  });
});

router.post("/create", async (req, res) => {
  StudentModel.create(req.body, (error, data) => {
    if (error) {
      res.status(500).send("Error");
    } else {
      res.status(200).send(data);
    }
  });
});

router.delete("/:id", async (req, res) => {
  StudentModel.findByIdAndDelete(req.params.id, (error, data) => {
    if (error) {
      res.status(500).send("Error");
    } else {
      res.status(200).send(data);
    }
  });
});

router.put("/update/:id", async (req, res) => {
  StudentModel.findByIdAndUpdate(
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
  StudentModel.findById(req.params.id, (error, data) => {
    if (error) {
      res.status(500).send("Error");
    } else {
      res.status(200).send(data);
    }
  });
});

router.get("/Achievement", async (req, res) => {
  try {
    const result = await achiveModel.find({}, { projection: { [achiveNames]: 1 } }).toArray();
    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(500).send('Error');
  } finally {
    await client.close();
  }
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
