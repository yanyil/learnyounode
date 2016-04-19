var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback) {
  fs.readdir(dir, function(err, data) {
    if(err) {
      return callback(err);
    }

    var filtered = [];
    data.forEach(function(file) {
      if(path.extname(file) === '.' + ext) {
        filtered.push(file);
      }
    });
    return callback(null, filtered);
  });
};