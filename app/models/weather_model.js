var mongoDB = require('mongoose');

var weather_schema = new mongoDB.Schema({
    cidade : {type: String, required : true},
    clima : {type: String, required : true},
    temp : {type: String, required : true},
    created : {type: Date, default: Date.now }
})

module.exports = { Mongoose: mongoDB, weather: weather_schema }