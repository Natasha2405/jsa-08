const weather = require('../pkg/weather');
const weather2 = require('../pkg/weather/forecast');

const getWeather = async (req, res) => {

    let data = await weather.getCityWeather(req.params.city);

    res.status(200).send(data);
};

const getWeatherForecast = async (req, res) => {

    let data = await weather2.getCityWeather(req.params.city);

    res.status(200).send(data);
};

module.exports = {
    getWeather,
    getWeatherForecast
};