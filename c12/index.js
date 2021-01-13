
const express = require('express');
const weather = require('./handlers/weather');

const api = express();

api.get('/api/v1/weather/:city', weather.getWeather);

api.get('/api/v1/weather/forecast/:city', weather.getWeatherForecast);

api.listen(10000, err => {
    if(err) {
        return console.log(err);
    }
    console.log('Service started successfully on port 10000');
});