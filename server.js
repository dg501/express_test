var express = require('express');
var app = express();
var router = express.Router();

app.set('views', __dirname + '/app/views');
app.set('view engine', 'jade');
app.use('/', require('./app/routes')(router));

app.listen(4000, function() {
    console.log("Currently running on port 4000!");
});