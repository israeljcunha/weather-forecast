module.exports = function (application) {
    application.get('/api/datatables', function(request, response) {
        application.app.controllers.home.api.datatables(application, request, response);
    })
};