var Icon = {
	init: function(size) {
		this.size = size;
	},
	addToDom: function($el) {
		$el.appendTo($('body'));
	}
};

var Cat = Object.create(Icon);
Cat.customize = function(size, img) {
	// included images that can be used as value for img: 
		// grin.svg, lol.svg, luv.svg
	this.init(size);
	this.img = img;
};
Cat.createEl = function() {
	var $el = $('<div>');
	$el.addClass('container');
	$el.css({
		width: this.size + 'px',
		height: this.size + 'px',
		marginLeft: '-' + (this.size/2) + 'px',
		marginTop: '-' + (this.size/2) + 'px',
		background: 'url(svg/' + this.img + ')',
		backgroundSize: 'contain'
	});
	this.addToDom($el);
};

$(document).ready(function() {
	var kitty = Object.create(Cat);
	kitty.customize(100, 'grin.svg');
	kitty.createEl();
});