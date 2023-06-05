// Dependencies
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

// Sets up the express app
var app = express();
var PORT = process.env.PORT || 3001;

// Enable CORS
app.use(cors());

// Sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files
app.use("/public", express.static(path.join(__dirname, "public")));

require("./routes/html-routes")(app);
require("./routes/api-routes")(app);

// Starts the server to begin listening
app.listen(PORT, function() {
console.log("App listening on PORT " + PORT);
});