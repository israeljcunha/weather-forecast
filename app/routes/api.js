module.exports = function (application) {
    application.get('/api/datatables/large', function(request, response) {
        application.app.apis.getcities.datatables_large(application, request, response);
    })

    application.get('/api/datatables/smaller', function(request, response) {
        application.app.apis.getcities.datatables_smaller(application, request, response);
    })
};