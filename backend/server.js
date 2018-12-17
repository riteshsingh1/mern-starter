const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes/index");
const app = express();
const config = require("./config/keys");
// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

app.use("/", routes);

// connect to database
console.log(config.mongoURI);
mongoose
  .connect(
    config.mongoURI,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));
