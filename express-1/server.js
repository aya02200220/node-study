const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  console.log("hello express!!");
  // res.send("<h1>Hello from server</h1>");
  // res.sendStatus(500);
  // res.status(500).send("<h2>server error</h2>");
  res.status(500).json({ msg: "Server error" });
});

app.listen(PORT, () => {
  console.log("server is running");
});
