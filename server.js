var express = require('express');
var app=express();

app.set('views', '/Users/dgibson/dev/express_test/node_modules/views');
app.set('view engine', 'jade');

app.get('/test', function(req, res) {
    res.render('index', { title: 'New Tab', message: Math.random(), message2: 'This is a paragraph.'});
});

app.get('/diff', function(req, res) {
    res.send("This is a dead end");
});

app.get('/', function(req, res) {
    res.status(200).json({ "number": Math.random() });
});

var server=app.listen(4000, function() {
    console.log("Currently running on port 4000!");
});