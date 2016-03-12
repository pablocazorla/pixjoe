/* Pirca Plugin
 * @author: Pablo Cazorla
 * @e-mail: pablo.cazorla@huddle.com.ar
 * @date: 22/08/2012
 */
(function($) {
	"use strict";

	var addedCanvas = false,
		settings = {
			backgroundColor: '#EEE',
			borderColor: '#CCC',
			borderWidth: 2,
			fontSize: 14,
			fontFamily: 'Arial',
			fontWeight: 'bold',
			color: '#AAA'
		},
		canvas, w, h,
		addCanvas = function() {
			var $container = $('<div/>')
				.css({
					'position': 'absolute',
					'display': 'none',
					'overflow': 'hidden',
					'width': '1px',
					'height': '1px'
				})
				.appendTo('body'),
				$canvas = $('<canvas id="pixjoe-' + Math.round(Math.random() * 9999999) + '"/>').appendTo($container);

			canvas = $canvas[0];
			addedCanvas = true;
		},
		formattedSize = function(a) {
			return (typeof a == 'undefined') ? 150 : parseInt(a);
		},
		render = function(img) {
			if (!addedCanvas) {
				addCanvas();
			}

			var $img = $(img);

			w = formattedSize($img.attr('width'));
			h = formattedSize($img.attr('height'));

			canvas.width = w;
			canvas.height = h;


			var c = canvas.getContext('2d');

			c.lineCap = 'square';
			c.lineJoin = 'miter';
			c.textAlign = 'center';
			c.fillStyle = settings.backgroundColor;
			c.strokeStyle = settings.borderColor;
			c.lineWidth = 2 * settings.borderWidth;
			c.font = settings.fontWeight + ' ' + settings.fontSize + 'px ' + settings.fontFamily;



			c.rect(0, 0, canvas.width, canvas.height);
			c.fill();
			c.stroke();
			c.fillStyle = settings.color;
			c.fillText(w + 'x' + h, .5 * w, .5 * (h + settings.fontSize * .7));

			$img.attr('src', canvas.toDataURL());
		};


	$('document').ready(function() {
		$('img:not(.pixjoe-ready)').each(function() {
			if ($(this).attr('src') == 'pixjoe') {
				render(this);
			}
		});



	});

})(jQuery);