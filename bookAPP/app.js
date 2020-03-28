const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  config = require("./app/configs/config.js");

app.use(bodyParser.json());

app.listen(config.PORT, () => {
    console.log(` Escuchando en el puerto ${config.PORT}`);
    console.log("======================================================");
    console.log("======================================================");
  });