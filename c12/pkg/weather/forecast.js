const fetch = require('node-fetch');

const API_KEY = '';
const API_ENDPOINT = 'http://api.weatherapi.com/v1/forecast.json';
const days = 10;
// http://api.weatherapi.com/v1/forecast.json?key=b57f87e42e8b4310bbf222358210201&q=Skopje&days=10

const cityMaps = {
    'sk': 'skopje',
    'bt': 'bitola',
    'oh': 'ohrid',
    'te': 'tetovo',
    'ku': 'kumanovo',
    'ge': 'gevgelija'
};

const getCityWeather = async (city) => { // SK, Sk, sK, sk => sk
    city = cityMaps[city.toLowerCase()];

    let url = `${API_ENDPOINT}?key=${API_KEY}&q=${city}&days=${days}`;
    console.log(url);
    
    try {
        let data = await fetch(url);
        data = await data.json();

        let total = 0;

        data.forecast.forecastday.forEach(res => {
            total = total + res.day.avgtemp_c
            // console.log(total)
        });

        console.log(total);
        let avgTemp = (total / 3);
        console.log(`The average temperature of forecast weather is: ${avgTemp.toFixed(2)}`);

        return data;
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    getCityWeather
};
