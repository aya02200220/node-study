const express = require("express");
const router = express.Router();
const app = express();

app.get("/user", (req, res) => {
  res.send("User page");
});
