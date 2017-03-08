var express = require('express');
var app = express();
// require node module 'path'
var path = require('path');

// Define the port to run on
app.set('port', 3000);

// Using express.static middleware
app.use(express.static(path.join(__dirname, 'public')));



// Listen for requires
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
})
