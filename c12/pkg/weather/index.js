const fetch = require('node-fetch');

const API_KEY = '347fdad8ce7df45ca6596d03e148c4f0';
const UNITS = 'metric';
const API_ENDPOINT = 'http://api.openweathermap.org/data/2.5/weather';

const cityMaps = {
    'sk': 'skopje',
    'bt': 'bitola',
    'oh': 'ohrid',
    'te': 'tetovo',
    'ku': 'kumanovo',
    'ge': 'gevgelija'
};

let cache = {};

const getCityWeather = async (city) => {            
    city = cityMaps[city.toLowerCase()];           // SK, Sk, sK, sk => sk

    if(cache[city] && (new Date().getTime()) - cache[city].timestamp < 60000) {
        return cache[city].data;
    }

    let url = `${API_ENDPOINT}?appid=${API_KEY}&units=${UNITS}&q=${city}`;
    console.log(url);
    
    try {
        let data = await fetch(url);
        data = await data.json();

        cache[city] = {
            timstamp: new Date().getTime(),
            data
        };
        return data;
    } catch (err) {
        console.log(err);
    }

};

module.exports = {
    getCityWeather
};