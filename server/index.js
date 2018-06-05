var express = require('express');
var config = require('config');
var http = require('http');
var log = require('libs/log')(module);
var cors = require('cors');
var router = require('./router');

var app = express();

http.createServer(app).listen(config.get('port'), function() {
    log.info('Express server listening on port ' + config.get('port'));
});

app.use(cors());

app.use('/tasks', router.tasks)

app.use(function(req, res) {
    res.send(404, 'Not found');  
});
