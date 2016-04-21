var http = require('http');
var url = require('url');
var port = process.argv[2];

function parsetime(time) {
  return {
    "hour": time.getHours(),
    "minute": time.getMinutes(),
    "second": time.getSeconds()
  }
}

function unixtime(time) {
  return {"unixtime": time.getTime()};
}

var server = http.createServer(function (req, res) {
  var parsedUrl= url.parse(req.url, true);
  var time = new Date(parsedUrl.query.iso);
  var json;

  if(parsedUrl.pathname == "/api/unixtime") {
    json = unixtime(time);
  } else if(parsedUrl.pathname == "/api/parsetime") {
    json = parsetime(time);
  }

  if(json) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(json));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(port);