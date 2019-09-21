const { port } = require("./config");
const startServer = require("./src/server");
const connectToDb = require("./src/modules/connectToDb");

startServer(port);
connectToDb();