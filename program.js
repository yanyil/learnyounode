var filterModule = require('./filterModule');
var dir = process.argv[2];
var ext = process.argv[3];

filterModule(dir, ext, function(err, data) {
  if(err) {
    return console.error(err);
  }

  data.forEach(function(file) {
    console.log(file);
  });
});
