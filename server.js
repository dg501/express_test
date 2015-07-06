var express = require('express');
var app=express();

app.set('views', __dirname + '/app/views');
app.set('view engine', 'jade');

app.get('/test', require('./app/controllers/human-readable-random'));
app.get('/diff', require ('./app/controllers/automated-message'));
app.get('/', require ('./app/controllers/unused-page')

var server=app.listen(4000, function() {
    console.log("Currently running on port 4000!");
});