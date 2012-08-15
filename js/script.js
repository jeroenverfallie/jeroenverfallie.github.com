$(function(){
	
	$.getJSON("http://search.twitter.com/search.json?callback=?&q=%23workinprogress%20from%3Ajeroenverfallie&count=1", function(data) {
		$("#current span").html(((data['results'][0].text).replace('#workinprogress','')).toUpperCase());
	});

});