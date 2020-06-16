module.exports.index = function(application, request, response) {
    // var datetime = new Date();
    var data = application.app.apis.getweather.weather_by_city(application, request.body['city']);

    data.then(function(api_response){
        var api_data = api_response.data;
        iconcode = api_data['weather'][0]['icon'];
        var icon_url = "http://openweathermap.org/img/w/" + iconcode + ".png";

        context = {
            // date_now: datetime,
            data: api_data,
            icon: icon_url
        }

        response.render("home/index", context);

    });
    
    
}