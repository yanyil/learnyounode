var http = require('http');
var url = process.argv[2];
var received = [];

http.get(url, function(response) {
  response.setEncoding("utf8");
  response.on("data", function(data) {
    received.push(data);
  });
  response.on("end", function() {
    var string = received.join("");
    console.log(string.length);
    console.log(string);
  })
});
