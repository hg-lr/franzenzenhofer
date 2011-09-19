express = require('express');
util = require('util');
var app = express.createServer();
app.use(express.static(__dirname + '/../public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');



var n = [
 {
  title: 'Social',
  href: false,
  navpoints: [
     {title:'twitter', href:'https://twitter.com/#!/enzenhofer'},
     {title:'hacker news', href:'http://news.ycombinator.com/user?id=franze'},
     {title:'google+', href:'https://plus.google.com/105749162679933882289'},
     {title:'xing', href:'http://www.xing.com/profile/Franz_Enzenhofer'},
     {title:'linkedIn', href:'http://www.linkedin.com/in/franzenzenhofer'},
     {title:'fb fan page', href:'http://www.facebook.com/pages/Franz-Enzenhofer/156536657909'},
     
  ]
 },
 {
  title: 'Code',
  href: false,
  navpoints: [
     {title:'jade tutorial', href:'jade'},
     {title:'Coffeescript Robotstxt Parser', href:'https://github.com/franzenzenhofer/robotstxt'},
     {title:'Game Of Life - Mutliplayer', href:'https://github.com/franzenzenhofer/gol'},
     {title:'Farbzauber', href:'https://github.com/franzenzenhofer/farbzauber'},
      {title:'Real Time Logfile Parser', href:'https://github.com/franzenzenhofer/nolog'},
       {title:'Language Detection', href:'https://github.com/franzenzenhofer/whatlang'},
        {title:'API maker', href:' https://github.com/franzenzenhofer/apimaker'},
           {title:'Function Processing Queue', href:'  https://github.com/franzenzenhofer/qfi'},
     
     
     
    
    
     
  ]
 },
  {
  title: 'Demos',
  href: false,
  navpoints: [
     {title:'the bananan project', href:'http://www.facesaerch.com/banana.html'},
     {title:'html5 video', href:'http://www.barbafan.de/html5video?video=tron'},
     {title:'farbzauber', href:'http://www.barbafan.de/farbzauber/w'},
     
  ]
 },
 { 
  title: 'Tools',
  href: false,
  navpoints: [
     {title:'robots.txt checker', href:'http://www.franz-enzenhofer.com/robotstxt'},
     {title:'depersonalizer', href:'http://www.facesaerch.com/depersonalizer/'},
     {title:'nofollow bookmarklet', href:'http://www.facesaerch.com/blog/nofollow-bookmarklet/'},
     {title:'Farbzauber Chrome App', href:'https://chrome.google.com/webstore/detail/ednbfblokipkbkecmfinlfhcikhidnoc'}
  ]
 },
 {
  title: 'Sideprojects',
  href: false,
  navpoints: [
     {title:'miniQR.com', href:'http://miniqr.com/'},
     {title:'replycam.com', href:'http://replycam.com/'},
     {title:'facesaerch.com', href:'http://www.facesaerch.com/'},
     {title:'facesaerch.com/update', href:'http://www.facesaerch.com/update/'}
  ]
 },

 {
  title: 'articles',
  href: false,
  navpoints: [
    {title:'techcrunch.com - link liquidity crisis', href:'http://eu.techcrunch.com/2010/07/07/startups-linking-to-your-competition-will-help-you-no-really/'},
    {title:'idee.vc - SEO (german)', href:'http://idee.vc/2010/08/31/seo/'},
    {title:'idee.vc - SEO Culling (german)', href:'http://idee.vc/2010/09/07/culling/'},
    {title:'idee.vc - Google Instant Search (german)', href:'http://idee.vc/2010/09/09/aus-aktuellem-anlass-google-instant-search/'},
    {title:'stackoverflow.com - General URL rules', href:'http://stackoverflow.com/questions/3865020/is-it-good-idea-to-use-url-names-with-special-characters/3967220#3967220'},
     {title:'Googlebot on a tcp/ip level', href:'http://tupalo.com/en/blog/seo-mystery/'}
 ]
 },
 {
  title: 'press',
  href: false,
  navpoints: [
   {title:'engadget.com - HTML5 prettifies fan-made Tron trailer... in real time!',href:'http://www.engadget.com/2010/12/06/html5-prettifies-fan-made-tron-trailer-in-real-time-video/'},
     {
     
     title:'techcrunch.com - MiniQR brings URL shortening to QR Codes',  href:'http://eu.techcrunch.com/2010/01/04/miniqr-brings-url-shortening-to-qr-codes/'},
     {title:'seroundtable.com - Why Google May Not Find Your Sitemap File',  href:'http://www.seroundtable.com/archives/023053.html'},
     {title:'ajaxian.com - jQuery.fn.webkitTransform: bananas on the skew-whiff',  href:'http://ajaxian.com/archives/jquery-fn-webkittransform-bananas-on-the-skew-whiff'},
     {title:'techcrunch.com - Better Interface for Image Search',  href:'http://techcrunch.com/2008/04/21/a-better-interface-for-image-search'},
     {title:'face.com - Gender-o-Meter on replycam.com',  href:'http://developers.face.com/2010/05/gender-o-meter-for-replycam-com/'},
     {title:'lockergnome.com - How to Create QR Codes and Share Them',href:'http://www.lockergnome.com/social/2011/03/10/how-to-create-qr-codes-and-share-them/'}
    
     
      
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