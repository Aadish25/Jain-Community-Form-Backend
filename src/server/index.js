const mongoose = require("mongoose");
const express = require("express");
const database = require("../core/database/db.js");
const form = require("../core/controllers/form.js");
const cors = require("cors");

const app = express();
app.use(express.json());

// Define the allowed origins
const allowedOrigins = [
  "http://localhost:5173",
  "https://jain-community-form-2.vercel.app",
  "https://jain-community-form.vercel.app"
];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin like mobile apps, curl requests
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 200 // Some legacy browsers choke on 204
}));

app.use("/form", form);
app.get("/", (request, response) => {
  response.json({ message: "Hello!!" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});
