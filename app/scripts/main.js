'use strict';
/*
var geocoder;
var map;

function codeAddress(address) {
	geocoder.geocode( { 'address': address}, function(results, status) {
		if(status === google.maps.GeocoderStatus.OK) {
			map.setCenter(results[0].geometry.location);
			var marker = new google.maps.Marker({
				map: map,
				position: results[0].geometry.location
			});
			var info = new google.maps.InfoWindow({
				content: 'yes, this small country'
			});
			google.maps.event.addListener(marker, 'click', function () {
				info.open(map, this);
			});

			google.maps.event.trigger(marker, 'click');
		}
	});
}

function initialize() {
	geocoder = new google.maps.Geocoder();
	var mapOptions = {
		zoom: 4
	};
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	codeAddress('Costa Rica');
}

google.maps.event.addDomListener(window, 'load', initialize);*/

$(window).scroll(function() {
	$('.container').each(function(i, el) {
		var $el = $(el);

		if ($el.visible(true) && !$el.hasClass('visible')) {
			$el.addClass('animate-from-bottom visible');
		}

	});
});
