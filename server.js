// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Basic route that sends the user first to the AJAX Page
app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
  });
  
  // Displays all friends
  app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });
  
  // Displays a single friends, or returns false
  app.get("/api/data/friends", function(req, res) {
    var chosen = req.params.friends;
  
    console.log(chosen);
  
    for (var i = 0; i < friends.length; i++) {
      if (chosen === friends[i].routeName) {
        return res.json(friends[i]);
      }
    }
  
    return res.json(false);
  });
  
  // Create New friends - takes in JSON input
  app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newFriends = req.body;
  
    // Using a RegEx Pattern to remove spaces from newFriends
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newFriends.routeName = newFriends.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newFriends);
  
    friends.push(newFriends);
  
    res.json(newFriends);
  });
  
  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  