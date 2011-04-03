express = require('express');
util = require('util');
var app = express.createServer();
app.use(express.static(__dirname + '/../public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

var n = [
 {
  title: 'javascript / nodeJS',
  href: false,
  navpoints: [
     {title:'jade', href:'jade'},
  ]
 },
{
  title: 'about',
  href: false,
  navpoints: [
     {title:'curriculum vitae',  href:'cv'},
  ]
 },
 {
  title: 'articles',
  href: false,
  navpoints: [
    {title:'link liquidity crisis', href:'http://eu.techcrunch.com/2010/07/07/startups-linking-to-your-competition-will-help-you-no-really/'},
    
  ]
 }
]




//start page
app.get('/', function(req, res){res.render('index.jade', {title: 'Franz Enzenhofer SEO', description:null, navigation: n});});
app.get('/index.html', function(req, res){res.render('index.jade', {title: 'Franz Enzenhofer SEO', description:null, navigation: n});});


//articles

//jade
app.get('/jade', function(req, res){res.render('jade.jade', {title: 'jade tutorial', description:null, navigation: n});});
app.get('/cv', function(req, res){res.render('cv.jade', {title: 'Franz Enzenhofer Curriculum Vitae', description:null, navigation: n});});

/*app.get('/img/*', function(req, res){

  var file = req.params[0];
  res.sendfile(__dirname+ '/../public/img/' + file)
//res.send(req.body);
  console.log(util.inspect(req))
  console.log(__dirname+ '/../public/img/' + file);

})*/



app.listen(3000);