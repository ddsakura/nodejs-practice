
/*
 * Route 1
 */
 
var index = require('../controllers/index');

module.exports = function(app, io) {
    app.get('/socketiosample1', index.index);
    	var i = 0;
  
    io.sockets.on('connection', function (socket) {
    
    function getI() {
    	return 'Node JS World' + i;
    };

    function loop() {
		i++;
		console.log(i);
		socket.emit('news', { hello: getI() });
	    setTimeout(function() { 
				loop();
	    	}
	    	, 1000);
	    //
    };
    
        loop();
		socket.on('my other event', function (data) {
		console.log(data);
		});
    });
}