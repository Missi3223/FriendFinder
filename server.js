// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var bodyParser= require ("body-parser");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "./app/public")));
// The below points our server to a series of "route" files.

require("./app/routes/apiRoutes.js")(app);
require("./app/routes/htmlRoutes.js")(app);

  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
  