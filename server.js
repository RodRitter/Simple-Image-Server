const express = require("express");
require("dotenv").config();
const path = require("path");
const app = express();
const { imageController } = require("./controllers");

// Example: /image/landscape.jpg?width=200
app.get("/image/:id.:format", imageController.getImage);

app.get("/image-demo", (req, res) => {
  res.sendFile(path.join(__dirname, "pages/image-demo.html"));
});

app.get("/background-demo", (req, res) => {
  res.sendFile(path.join(__dirname, "pages/background-demo.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`Listening at http://localhost:${process.env.PORT}`);
});
