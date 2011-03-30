var app = require('express').createServer();

app.get('/', function(req, res){
  res.render('index.jade');
});

app.listen(3000);