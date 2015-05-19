var express = require('express'),
    app     = express();

var server = app.listen(3000, '0.0.0.0', function(){
  console.log("Listening on port %d", server.address().port)
});

module.exports.server = server;