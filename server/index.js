const express = require('express');
const app = express();
var config = require('config');
var http = require('http');
var log = require('libs/log')(module);

http.createServer(app).listen(config.get('port'), function() {
    log.info('Express server listening on port ' + config.get('port'));
});

app.use((request, response, next) => {
    request.chance = Math.random()
    next();
});

app.get('/data', (request, response) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    response.json({
        chance: request.chance
    });
});

app.use(function(req, res) {
    res.send(404, 'Страница не найдена');  
});
