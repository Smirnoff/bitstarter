var fs = require('fs');

var buffer = fs.readFileSync('index.html');
response.send(buffer.toString());

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
