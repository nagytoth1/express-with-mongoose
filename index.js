import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import config from "./config.json";
import routes from "./src/routes/crmRoutes";

const app = express(); //run the express server
const PORT = config.port;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1/CRMdb", {
  useNewUrlParser: true,
});
//bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//importing routes
routes(app);

app.get("/", (req, res) => {
  res.send(`Node and Express server is running on port ${PORT}...`);
});

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
