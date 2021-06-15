const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 1011;

// Define middleware here
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("portfolio/build"));
}

//route informaion
app.use(routes);
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/portfolio");


// Start the API server
app.listen(PORT, function() {
  console.log(`🎨  ==>API Server now listening on PORT ${PORT}!`);
});
