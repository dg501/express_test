var express = require('express');
var app=express();

app.get('/', function(req, res) {
    res.send("Further testing stuff");
});

app.get('/random', function(req, res) {
    res.status(200).json({ "number": Math.random() });
});

var server=app.listen(4000, function() {
    console.log("Currently running on port 4000!");
});