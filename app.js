
/**
 * Module dependencies.
 */

var express = require('express')
	, stylus = require('stylus')
	, nib = require('nib')
	, routes = require('./routes')
	, http = require('http')
	, path = require('path');

var app = express();

// Nib usage shim. Except I might not be using the word "shim" correctly.
var compileStylus = function(str,path){
	return stylus(str)
		.set('filename', path)
		.set('compress', true)
		.use(nib())
		.import('nib');
};

app.configure(function(){
	app.set('port', process.env.PORT || 3000);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.cookieParser('your secret here'));
	app.use(express.session());
	app.use(app.router);
	app.use(stylus.middleware({
		src: __dirname + '/public',
		compile: compileStylus
	}));
	app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
	app.use(express.errorHandler());
});

app.get('/about', routes.about);
app.get('/life', routes.life);
app.get('/about/site', routes.site);
app.get('/blog*', routes.blog);
app.get('/contact', routes.contact);
app.get('/', routes.index);
app.get('/resume', routes.resume);
app.get('/resume/download/:fileType', routes.download);
app.get('/resume/download/:fileType', routes.download);
app.get('/work', routes.work);

http.createServer(app).listen(app.get('port'), function(){
	console.log("Express server listening on port " + app.get('port'));
});
