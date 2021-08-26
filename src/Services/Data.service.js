const axios = require('axios');

export default class Api {

    serviceCall(callback, userName) {
        axios.get(`http://localhost:3002/jwt/${userName}`)
            .then(function (response) {
                callback(response.data['message']);
            })
            .catch(function (error) {
                if (error.response) {
                    if (error.response.status === 404) {
                        callback(`\u2014`)
                    }
                }
            })
    }

    getStations(callback, jwt) {
        axios.get(`http://localhost:3002/train-details/stations/${jwt}`)
            .then(function (response) {
                callback(response.data['message']);
            })
            .catch(function (error) {
                if (error.response) {
                    if (error.response.status === 404) {
                        callback(`\u2014`)
                    }
                }
            })
    }
}
