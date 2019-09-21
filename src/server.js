const app = require("./modules/app");
const cors = require('cors')
const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes/router");
const startServer = port => {
  app.listen(port, () => {
    app.use(cors());
    app.use(express.static("public/dist"));
    app.use(bodyParser.json());
    app.use("/", router);
    console.log(`server is listening to ${port}`);
  });
};

module.exports = startServer;
