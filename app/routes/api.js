module.exports = function (application) {
    application.get('/api/datatables/top_five', function(request, response) {
        application.app.apis.getcities.datatables_top_five(application, request, response);
    })

    application.get('/api/datatables/down_five', function(request, response) {
        application.app.apis.getcities.datatables_down_five(application, request, response);
    })

    application.get('/api/datatables/lasted', function(request, response) {
        application.app.apis.getcities.datatables_lasted(application, request, response);
    })
};