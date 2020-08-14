var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())

require('./app/routes/customer.routes.js')(app);

// Create a Server
var server = app.listen(8081, function () {

  // @ts-ignore
  var host = server.address().address
  // @ts-ignore
  var port = server.address().port

  console.log("App listening at http://%s:%s", host, port)

})