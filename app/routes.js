
module.exports = function(router) {

    router.get('/', require('./controllers/human-readable-random'));
    router.get('/different', require ('./controllers/automated-message'));
    router.get('/test', require ('./controllers/unused-page'));
    router.get('/saved', require ('./controllers/saved'));

    return router;
};
