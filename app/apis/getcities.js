module.exports.datatables_top_five = function(application, request, response) {
    var conection = application.settings.connDB(); 

    conection.open(function(err, mongoclient){
        mongoclient.collection("city", function(err, collection){
            collection.find({}).toArray(function(err, result){
                
                if (result === undefined) {
                    response.send({});
                    mongoclient.close();
                    return;
                }

                var occurences = result.reduce(function (r, result) {
                    r[result.city] = ++r[result.city] || 1;
                    return r;
                }, {});

                var result_p = Object.keys(occurences).map(function (key) {
                    if (key != "undefined") {
                        return { key: key, value: occurences[key] };
                    }                 
                });

                var dataframe = result_p.sort(function (a, b) {
                    if (a.value > b.value) {
                      return -1;
                    }
                    if (a.value < b.value) {
                      return 1;
                    }
                    return 0;
                  });

                  response.send(dataframe.slice(0,5));

            });
            mongoclient.close();
        });
    });
}


module.exports.datatables_down_five = function(application, request, response) {
    var conection = application.settings.connDB(); 

    conection.open(function(err, mongoclient){
        mongoclient.collection("city", function(err, collection){
            collection.find({}).toArray(function(err, result){

                if (result === undefined) {
                    response.send({});
                    return;
                }

                var occurences = result.reduce(function (r, result) {
                    r[result.city] = ++r[result.city] || 1;
                    return r;
                }, {});

                var result_p = Object.keys(occurences).map(function (key) {
                    if (key != "undefined") {
                        return { key: key, value: occurences[key] };
                    }                 
                });

                var dataframe = result_p.sort(function (a, b) {
                    if (a.value > b.value) {
                      return -1;
                    }
                    if (a.value < b.value) {
                      return 1;
                    }
                    return 0;
                  });

                response.send(dataframe.slice(dataframe.length - 5,dataframe.length));

            });
            mongoclient.close();
        });
    });
}


module.exports.datatables_lasted = function(application, request, response) {
    var conection = application.settings.connDB(); 

    conection.open(function(err, mongoclient){
        mongoclient.collection("city", function(err, collection){
            collection.find({}).toArray(function(err, result){

                if (result === undefined) {
                    response.send({});
                    return;
                }

                dataframe = result.slice(result.length - 5,result.length).reverse();
                response.send(dataframe);
            });

            mongoclient.close();

        });
    });
}