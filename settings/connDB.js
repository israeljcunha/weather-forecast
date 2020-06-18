var mongo = require('mongodb');

var connMongoDB = function(){
    console.log('+ [nodemon] Conexao Mongo DB');
	var db = new mongo.Db(
		'weatherforecast',
		new mongo.Server(
			'localhost',
			27017,
			{}
		),
		{}
	);

	return db;
}

module.exports = function(){
	return connMongoDB;
}