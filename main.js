var http = require('http');
var url = require('url');
var mydate = require('./myDate');

var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World!<br>');
    res.write('The current date is ' + mydate.myDateTime() + '<br>');
    res.write('Request: ' + req.url + "<br>");
    var q = url.parse(req.url, true);

    res.write('Proto: ' + q.protocol + "<br>");
    res.write('Host:  ' + q.hostname + "<br>");
    res.write('Port:  ' + q.port + "<br>");
    res.write('Path:  ' + q.path + "<br>");
    //res.write('Query: ' + q.query + "<br>");
    
    console.info(q.query);
    res.write('Lallo: ' + q.query.lallo + "<br>");
    res.write('Gigi: ' + q.query.gigi + "<br>");
    

    res.end();
});


server.listen(8080);