const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/2fe94ab333a81636c210d27a11c3c6fe/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        var fToCel = parseInt((body.currently.temperature - 32) * 5 / 9);

        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + fToCel + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast