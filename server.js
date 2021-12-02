const express = require("express");
require("dotenv").config();
const path = require("path");
const app = express();
const { imageController } = require("./controllers");

// Example: /image/landscape.jpg?width=200
// Params: width, height, blur, format (jpg, png)
app.get("/image/:id.:format", imageController.getImage);

// Demos
app.get("/image-demo", (req, res) => {
  res.sendFile(path.join(__dirname, "pages/image-demo.html"));
});

app.get("/background-demo", (req, res) => {
  res.sendFile(path.join(__dirname, "pages/background-demo.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`Simple Image Server Running`);
  console.log(`http://localhost:${process.env.PORT}`);
});
