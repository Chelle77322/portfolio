const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 1011;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/portfolio"

const app = express();
app.use(logger("dev"));

// Define middleware here
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("/portfolio/build"));
}


// Connect to the Mongo DB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false
});
//route informaion
app.use(require("./routes/index.js"));

// Start the API server
app.listen(PORT, function() {
  console.log(`🎨 API Server now listening on PORT ${PORT}!`);
});
