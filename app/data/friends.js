const fs = require("fs");
const path = require("path");
var raw = fs.readFileSync(path.join(__dirname, "../data/friends.json"));
var friends = JSON.parse(raw);

module.exports = friends;