var RandomNumber = require('../models/random-number');

module.exports = function(request, response) {

    RandomNumber.insert(Math.random(), function(error) {

        if (error) {
            response.render('index', { message2: "Number failed to save! " + error });
        }

        response.render('index', { message2: "Number saved!" });
    });
};
