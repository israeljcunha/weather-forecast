module.exports.datatables = function(application, request, response) {
    var conection = application.settings.connDB(); 

    conection.open(function(err, mongoclient){
        mongoclient.collection("city", function(err, collection){
            collection.find({}).toArray(function(err, result){
                response.send({data: result});
            });
            mongoclient.close();

        });
    });
}