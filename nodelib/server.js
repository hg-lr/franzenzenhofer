var app = require('express').createServer();

app.get('/', function(req, res){
  res.send('franz enzenhofer');
});

app.listen(3000);