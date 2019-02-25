  
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