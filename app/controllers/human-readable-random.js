var RandomNumber = require('../models/random-number');

module.exports = function(request, response) {
    RandomNumber.findLatest().then(function(result){
        response.render('index', { message: result[0].value});
    });
};