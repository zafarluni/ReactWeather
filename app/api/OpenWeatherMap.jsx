const axios = require('axios');

module.exports = {
    getTemp: function (location) {
        var requestUrl = '/weather/' + encodeURIComponent(location);

        return axios
            .get(requestUrl)
            .then(function (res) {
                if (res.data.cod && res.data.message) {
                    throw new Error(res.data.message);
                } else {
                    return res.data.main.temp;
                }
            }, function (error) {
                throw new Error(error.message);
            });
    }
}