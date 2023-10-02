// src/config/db.js
const mongoose = require("mongoose");

// Replace this with your MONGOURI.
const MONGOURI = process.env.MONGOURI;

mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.error(`MongoDB connection error: ${err}`);
});
