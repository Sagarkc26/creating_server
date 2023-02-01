const express = require("express");
const app = express();

app.get("", (req, res) => {
  res.send("Welcome to the home page");
});
app.get("/about", (req, res) => {
  res.send("Welcome to the about page");
});

app.listen(5000);
