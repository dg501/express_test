
module.exports = function(request, response) {
    response.render('index', { message: Math.random() });
};
