var RandomNumber = require('../models/random-number');

module.exports = function(request, response) {
    RandomNumber.findLatest(function(error, result) {

        if (error) {
            console.log("Error! " + error);
        }

        response.render('index', { message: result[0].value});
    });
};