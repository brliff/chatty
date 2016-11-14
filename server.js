var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

var messages = [];

var headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
}

app.get('/', function(req, res) {
    res.status(200)
        .set(headers)
        .send(JSON.stringify(messages))
});

app.post('/', function( req, res ) {
    messages.push({
        message: req.body.message,
        time: new Date()
    });

    res.status(200)
        .set(headers)
        .send(JSON.stringify(messages));
});

app.options('/', function( req, res ) {
    res.status(200)
        .set(headers)
        .send();

})


app.listen(8989, function() {
    console.log('Listing on port: I server you up');
});