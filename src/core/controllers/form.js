// routes/formData.js
const express = require("express");
const FormData = require("../models/form");
const router = express.Router();

// POST request to submit form data
router.post("/", async (req, res) => {
    // console.log(req.body);
  try {
    const formData = new FormData(req.body);
    await formData.save();
    res.status(201).send("Data submitted successfully");
  } catch (error) {
    res.status(400).send(error);
  }
});

// GET request to fetch all form data
router.get("/", async (req, res) => {
  console.log("GET request");
  try {
    const formData = await FormData.find();
    res.status(200).send(formData);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
