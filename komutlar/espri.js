var request = require('request');

request('https://api.eggsybot.xyz/espri', function (error, response, body) {
    if (error) return console.log('Hata:', error);
    else if (!error) {
        var info = JSON.parse(body);
        console.log(info.soz);
    }
});
