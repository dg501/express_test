
module.exports = function(router) {

    router.get('/test', require('./controllers/human-readable-random'));
    router.get('/diff', require ('./controllers/automated-message'));
    router.get('/', require ('./controllers/unused-page'));

    return router;
};
