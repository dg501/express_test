var express = require('express');
var app = express();
var router = express.Router();

app.set('views', __dirname + '/app/views');
app.set('view engine', 'jade');
app.use('/', require('./app/routes')(router));


console.log('process.env is', process.env);
var port = process.env.PORT || 4000;

app.listen(port, function() {
    console.log("Currently running on port " + port + "!");
});