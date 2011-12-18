
/*
 *  Route 2
 */

exports.jquery = function(req, res){
	var $ = require('jquery'); 

    $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", {
    	tags: "cat",
    	tagmode: "any",
    	format: "json"
	}, function(data) {
		var imgs = '{imgs:[';
	    $.each(data.items, function(i,item){
    		imgs += '{img:"' + item.media.m + '"}';
    	    
    	    if ( i == 3 ) {
      			imgs += ']}';
		      	return false;
      		} else {
		    	imgs += ',';
		    }
    });    
    
    console.log(imgs); 
    res.render('jquery', {imgs:[{img:"http://farm8.staticflickr.com/7008/6529916751_0581617361_m.jpg"},{img:"http://farm8.staticflickr.com/7160/6529913429_d29e5b7c8b_m.jpg"},{img:"http://farm8.staticflickr.com/7005/6529892381_3bae14c52c_m.jpg"},{img:"http://farm8.staticflickr.com/7164/6529891385_5c1bc9be0e_m.jpg"}]});
    //res.render('nodetube', {imgs : imgs});
  });
};

exports.hello = function(req, res){
  res.render('hello', { username: req.params.name })
};