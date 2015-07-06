var express = require('express');
var app=express();

app.set('views', __dirname + '/app/views');
app.set('view engine', 'jade');

app.get('/test', function(request, response) {
    response.render('index', { message: Math.random() });
});

app.get('/diff', function(request, response) {
    response.send("This is a dead end");
});

app.get('/', function(request, response) {
    response.status(200).json({ "number": Math.random() });
});

var server=app.listen(4000, function() {
    console.log("Currently running on port 4000!");
});