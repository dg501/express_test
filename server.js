var express = require('express');
var app = express();
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/test');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Failed to connect!'));

db.once('open', function() {

    app.set('views', __dirname + '/app/views');
    app.set('view engine', 'jade');
    app.use('/', require('./app/routes')(router));

    var port = process.env.PORT || 4000;

    app.listen(port, function() {
        console.log("Currently running on port " + port + "!");
    });
});
