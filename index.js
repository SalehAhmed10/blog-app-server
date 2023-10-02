// index.js
const express = require("express");
const app = express();

const authRoutes = require("./src/routes/auth");
const postRoutes = require("./src/routes/posts");

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/posts", postRoutes);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
