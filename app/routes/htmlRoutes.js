var path = require("path");

module.exports = function(app) {

app.get("/home", function(request, response) {
    response.sendFile(path.join(__dirname, "../public/home.html"));
  });
  
  app.get("/survey", function(request, response) {
    response.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  app.get("/friends", function (request,response){
    response.sendFile(path.join(__dirname, "../data/friends.json"));
  });

  app.get("*", function(request, response) {
    response.sendFile(path.join(__dirname, "../public/home.html"));
});
};