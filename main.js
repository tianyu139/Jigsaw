var express = require('express');
var app = express();
var ejs = require('ejs');
var router = express.Router();
var path = __dirname + '/views/';


app.use(express.static(__dirname + '/public'));
app.set('view engine','ejs');

app.get('/', function(req, res){
	res.render('pages/index');
});
app.get('/home', function(req, res){
	res.render('pages/index');
});
app.get('/search_results', function(req, res){
	
});
app.get('/profile', function(req, res){
	res.render('pages/profile');
});
app.get('/viewfeedback', function(req, res){
	res.render('pages/viewfeedback');
});
app.get('/chat', function(req, res){
	res.render('pages/chat');
});
app.get('/profile2', function(req, res){
	res.render('pages/profile2');
});
app.get('/search', function(req, res){
	res.render('pages/searchresults');
});
app.get('/aboutus', function(req, res){
	res.render('pages/aboutus');
});

app.listen(3000);
