const { connection } = require("mongoose");

module.exports.index_post = function(application, request, response) {
    var data = application.app.apis.getweather.weather_by_city(application, request.body['city']);

    data.then(function(api_response){
        var api_data = api_response.data;
        iconcode = api_data['weather'][0]['icon'];
        var icon_url = "http://openweathermap.org/img/w/" + iconcode + ".png";

        console.log

        var data_city = {
            'city': api_data.name,
            'country': api_data.sys.country,
            'humidity': api_data.main.humidity + ' %',
            'description': api_data.weather[0].description,
            'temp': Math.round(api_data.main.temp) + ' °C',
            'icon': icon_url,
            'creation': Date.now
        }
        
        var conection = application.settings.connDB; 
        var WeatherDAO = new application.app.models.WeatherDAO(conection);
        WeatherDAO.insertCity(data_city);
        response.render("home/index",{data: [data_city]});

    });
    
}

module.exports.index = function(application, request, response) {
    response.render("home/index", {data: {}});
}