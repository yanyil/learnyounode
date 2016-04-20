var http = require('http');
var bl = require('bl');
var url = process.argv.slice(2);
var contents = [];
var count = 0;

function httpGet (index) {
  http.get(url[index], function(response) {
    response.pipe(bl(function(err, data) {
      if(err) {
        return console.error(err);
      }
      data = data.toString();
      contents[index] = data;
      count++;

      if(count == 3) {
        for(var j = 0; j < 3; j++) {
          console.log(contents[j]);
        }
      }
    }));
  });
};

for(var i = 0; i < 3; i++) {
  httpGet(i);
}
