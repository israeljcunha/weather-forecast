module.exports.datatables_large = function(application, request, response) {
    var conection = application.settings.connDB(); 

    conection.open(function(err, mongoclient){
        mongoclient.collection("city", function(err, collection){
            collection.find({
            }).toArray(function(err, result){

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
                    if (a.name > b.name) {
                      return 1;
                    }
                    if (a.name < b.name) {
                      return -1;
                    }
                    return 0;
                  });

                response.send(dataframe.slice(0,5));
            });
            mongoclient.close();

        });
    });
}


module.exports.datatables_smaller = function(application, request, response) {
    var conection = application.settings.connDB(); 

    conection.open(function(err, mongoclient){
        mongoclient.collection("city", function(err, collection){
            collection.find({
            }).toArray(function(err, result){

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
                    if (a.name > b.name) {
                      return 1;
                    }
                    if (a.name < b.name) {
                      return -1;
                    }
                    return 0;
                  });

                response.send(dataframe.slice(dataframe.length - 6,dataframe.length - 1));
            });
            mongoclient.close();

        });
    });
}