
/*
 *  Route 2
 */

exports.jquery = function(req, res){
	var $ = require('jquery'); 
	
    var imgArray = [];
    $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", {
        tags: "cat",
        tagmode: "any",
        format: "json"
    }, function(data) {
        $.each(data.items, function(i,item){
            imgArray[i] = {img: item.media.m };
            
            if ( i == 3 ) {
                console.log(imgArray);
                res.render('jquery', {imgs: function() { return imgArray;}});
            }
        }); 
        
    });         
};

exports.hello = function(req, res){
  res.render('hello', { username: req.params.name })
};

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};