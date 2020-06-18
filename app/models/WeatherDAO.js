function WeatherDAO(connection){
    this._connection = connection();
    this._results = {};
}

WeatherDAO.prototype.insertCity = function(city){
	this._connection.open( function(err, mongoclient){
		mongoclient.collection("city", function(err, collection){
			collection.insert(city);
			mongoclient.close();
		});
	});
}

WeatherDAO.prototype.getCity = async function(city){
    this._connection.open(await function(err, mongoclient){
        mongoclient.collection("city", function(err, collection){
            collection.find({city: city}).toArray(function(err, result){
                return result;
            });
            mongoclient.close();
        });
    });
}

module.exports = function(){
	return WeatherDAO;
}

