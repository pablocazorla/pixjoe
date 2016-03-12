/* Pirca Plugin
 * @author: Pablo Cazorla
 * @e-mail: pablo.cazorla@huddle.com.ar
 * @date: 22/08/2012
 */
(function($) {
	"use strict";

	$('document').ready(function() {

		var $canvas = $('<canvas id="pixjoe" width="600" height="400"/>').appendTo('body');

		var c = $canvas[0].getContext('2d');

		var render = function($img) {

			var width = parseInt($img.attr('width')),
				height = parseInt($img.attr('height')),

				backgroundColor = '#CCC',
				borderColor = '#555',

				borderWidth = 3;

			///////////////////////////////////////////////
			c.fillStyle = backgroundColor;
			c.strokeStyle = borderColor;
			c.strokeWidth = borderWidth;


			c.rect(0,0,width,height);
			c.fill();
			c.stroke();


		};

		$('img:not(.pixjoe-ready)').each(function() {
			if ($(this).attr('src') == 'pixjoe') {
				render($(this));
			}
		});



	});



})(jQuery);