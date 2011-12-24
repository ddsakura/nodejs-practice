
/**
 * Module dependencies.
 */

var express = require('express'),
    app = module.exports = express.createServer(),
    io = require('socket.io').listen(app),
    routes = require('./routes')(app, io),
    routes2 = require('./routes2');

// Configuration

app.configure(function () {
    app.set('views', __dirname + '/views');
    app.set('view engine', 'mustache');
    app.register(".mustache", require('stache'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    //app.use(require('stylus').middleware({ src: __dirname + '/public' }));
    //app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});

app.configure('development', function () {
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function () {
    app.use(express.errorHandler());
});

// Routes
app.get('/jquery', routes2.jquery);
app.get('/hello/:name', routes2.hello);
app.get('/', routes2.index);

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
