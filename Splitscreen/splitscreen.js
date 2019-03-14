function splitScroll() {
	const controller = new ScrollMagic.Controller();

	new ScrollMagic.Scene({
		duration: '200%', 
		triggerElement:'.about-title',
		triggerHook: 0
	})
	.setPin('.about-title')
	.addIndicators()
	.addTo(controller);
}

splitScroll();


var lineDrawing = anime({
  targets: '#lineDrawing .lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 3000,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
});