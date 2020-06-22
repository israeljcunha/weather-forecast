var axios = require('axios');

module.exports.weather_by_city = async function(application, city){
    url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + 
    '&units=metric&appid=eb46ab7f70b9e698ce76cebd61ca38e7&lang=pt_br'

    try {
        return axios.get(url).catch(error => {
            return 'Este campo deve conter um valor válido, nada foi encontrado com ' + city;
            throw error;
          });
    } catch (error) {
        return 'Este campo deve conter um valor válido, nada foi encontrado com ' + city;
    }

} 