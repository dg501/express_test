var express = require('express');
var app = express();
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Failed to connect!'));

db.once('open', function(callback) {
    app.set('views', __dirname + '/app/views');
    app.set('view engine', 'jade');
    app.use('/', require('./app/routes')(router));


    console.log('process.env is', process.env);
    var port = process.env.PORT || 4000;

    app.listen(port, function() {
        console.log("Currently running on port " + port + "!");
    });
});
