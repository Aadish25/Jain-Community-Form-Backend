const mongoose = require("mongoose");
const express = require("express");
const database = require("../core/database/db.js");
const form = require("../core/controllers/form.js");
const cors = require("cors");

const app = express();
app.use(express.json());

// Define the allowed origins
const allowedOrigins = ["http://localhost:5173","https://jain-community-form-2.vercel.app","https://jain-community-form.vercel.app"];

app.use(cors({ origin: "*" }));
app.use("/form", form);
app.get("/", (request, response) => {
  response.json({ message: "Hello!!" });
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});
