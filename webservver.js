var http = require('http');
var fs  = require('fs');

var server = http.createServer();

var host = '192.168.0.15';

var port = 9999;

server.listen(port, host, 5000, function(){
    console.log('web server start ' + host + ':'+port);
});

server.on('connection', function(socket){
    console.log('client connection ok ');
});

server.on('request', function (req, res){
    console.log('client request !');
    //console.dir(req); 
    //파일읽기
    var filename = 'home.png';
    fs.readFile(filename, function(err, data){
    res.writeHead(200, {"Content-Type":"image/png"});
    res.write(data);
    res.end();
    })
    
});