const express = require('express');
const axios = require('axios');

const app = express();

const PORT = process.env.PORT || 3000;
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

const OPEN_WETHER_MAP_URL = `http://api.openweathermap.org/data/2.5/weather?&appid=${WEATHER_API_KEY}&units=metric`;

app.use(function (req, res, next) {
    if (req.headers['x-forwarded-proto'] == 'https') {
        res.redirect('http://' + req.hostname + req.url);
    } else {
        next();
    }
});

app.use(express.static("public"));

app.get('/weather/:location', (req, res) => {

var requestUrl = OPEN_WETHER_MAP_URL + '&q=' + encodeURIComponent(req.params.location);
  
axios.get(requestUrl).then(
        (respData) => {           
            res.send(respData.data);  
        }, (error) => {            
            res.send(error.response.data);
        }).catch((e) => res.send(error.response.data));
});

app.listen(PORT, () => {
    console.log("Application running...");
});