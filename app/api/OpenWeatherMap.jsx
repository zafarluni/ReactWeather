const axios = require('axios');

//8d1f3b727af58b0c25243a4eba49530f

const  OPEN_WETHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=8d1f3b727af58b0c25243a4eba49530f&units=metric';

module.exports = {
    getTemp : function(location) {
        var requestUrl = OPEN_WETHER_MAP_URL+'&q='+encodeURIComponent(location);        
        
       return axios.get(requestUrl).then(function(res){
            if(res.data.cod && res.data.message){
                throw new Error(res.data.message);
            }else {
                return res.data.main.temp;
            }
        },function(error){                     
            throw new Error(error.message);

        });
    }
}