// server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const formDataRoutes = require("./server/Controllers/form.js");

const app = express();
const port = process.env.PORT || 5000;
dotenv.config();
// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use("/", formDataRoutes);

// MongoDB connection
// console.log(process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI, {

});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});