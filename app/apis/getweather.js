var axios = require('axios');

module.exports.weather_by_city = function(application, city){
    url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=eb46ab7f70b9e698ce76cebd61ca38e7&lang=pt_br'
    return axios.get(url);
} 