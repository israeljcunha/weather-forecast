module.exports = function (application) {
        application.get('/', function(request, response) {
                application.app.controllers.home.home.index(application, request, response);
        })

        application.post('/', function(request, response) {
                application.app.controllers.home.home.index(application, request, response);
        })
};