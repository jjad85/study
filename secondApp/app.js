const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  config = require("./app/configs/config.js"),
  router = express.Router(),
  routes = require("./app/routes/index"),
  mongoose = require("mongoose");

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

routes(router);
app.use("/api", router);

mongoose.connect(
  `mongodb://` + config.IP_BD + `:` + config.PORT_BD + `/` + config.NAME_BD,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
  },
  err => {
    if (err) {
      console.log("Se presentó un error: " + err);
    }
  }
);

let db = mongoose.connection;
db.on("error", console.error.bind(console, "DB conection error: "));

if (!db) {
  console.log("Error during connecting with db");
} else {
  console.log("======================================================");
  console.log("======================================================");
  console.log(" Conexión a la base de datos [OK]");
}

app.listen(config.PORT, () => {
  console.log(` Escuchando en el puerto ${config.PORT}`);
  console.log("======================================================");
  console.log("======================================================");
});
