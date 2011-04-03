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
  title: 'Tools',
  href: false,
  navpoints: [
     {title:'depersonalizer', href:'http://www.facesaerch.com/depersonalizer/'},
     {title:'nofollow bookmarklet', href:'http://www.facesaerch.com/blog/nofollow-bookmarklet/'},
  ]
 },
 {
  title: 'Sideprojects',
  href: false,
  navpoints: [
     {title:'miniQR', href:'http://miniqr.com/'},
     {title:'replycam', href:'http://replycam.com/'},
     {title:'Facesaerch [deprecated]', href:'http://www.facesaerch.com/'},
     {title:'Facebook Coverflow', href:'http://www.facesaerch.com/update/'}
  ]
 },

 {
  title: 'articles',
  href: false,
  navpoints: [
    {title:'link liquidity crisis', href:'http://eu.techcrunch.com/2010/07/07/startups-linking-to-your-competition-will-help-you-no-really/'},
    {title:'SEO (german)', href:'http://idee.vc/2010/08/31/seo/'},
    {title:'SEO Culling (german)', href:'http://idee.vc/2010/09/07/culling/'},
    {title:'Google Instant Search (german)', href:'http://idee.vc/2010/09/09/aus-aktuellem-anlass-google-instant-search/'},
    {title:'General URL rules', href:'http://stackoverflow.com/questions/3865020/is-it-good-idea-to-use-url-names-with-special-characters/3967220#3967220'},
 ]
 },
 {
  title: 'press',
  href: false,
  navpoints: [
     {title:'MiniQR brings URL shortening to QR Codes',  href:'http://eu.techcrunch.com/2010/01/04/miniqr-brings-url-shortening-to-qr-codes/'},
     {title:'Why Google May Not Find Your Sitemap File',  href:'http://www.seroundtable.com/archives/023053.html'},
     {title:'jQuery.fn.webkitTransform: bananas on the skew-whiff',  href:'http://ajaxian.com/archives/jquery-fn-webkittransform-bananas-on-the-skew-whiff'},
     {title:'Better Interface for Image Search',  href:'http://techcrunch.com/2008/04/21/a-better-interface-for-image-search'},
     {title:'face.com developers site » Gender-o-Meter on replycam.com',  href:'http://developers.face.com/2010/05/gender-o-meter-for-replycam-com/'},
     {title:'How to Create QR Codes and Share Them',href:'http://www.lockergnome.com/social/2011/03/10/how-to-create-qr-codes-and-share-them/'}
      
  ]
 },
 {
  title: 'about',
  href: false,
  navpoints: [
     {title:'curriculum vitae',  href:'cv'},
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