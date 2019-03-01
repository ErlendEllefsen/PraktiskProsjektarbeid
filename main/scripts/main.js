/* Main JS Doucument */



//Splitscreen

function splitScroll() {
	const controller = new ScrollMagic.Controller();

	new ScrollMagic.Scene({
		duration: '200%', 
		triggerElement:'.about-title',
		triggerHook: 0
	})

	.setPin('.about-title')
	.addTo(controller);
}

splitScroll();


//Appeareffect

function scollAppear1(){
	var introText = document.querySelector('.intro-text-1');
	var introPosition = introText.getBoundingClientRect().top;
	var screenPosition = window.innerHeight / 1.5;

	if (introPosition < screenPosition) {
		introText.classList.add('intro-appear');
	}
}

	window.addEventListener('scroll',scollAppear1);

function scollAppear2(){
	var introText = document.querySelector('.intro-text-2');
	var introPosition = introText.getBoundingClientRect().top;
	var screenPosition = window.innerHeight / 1.5;

	if (introPosition < screenPosition) {
		introText.classList.add('intro-appear');
	}
}

	window.addEventListener('scroll',scollAppear2);

function scollAppear3(){
	var introText = document.querySelector('.intro-text-3');
	var introPosition = introText.getBoundingClientRect().top;
	var screenPosition = window.innerHeight / 1.5;

	if (introPosition < screenPosition) {
		introText.classList.add('intro-appear');
	}
}

	window.addEventListener('scroll',scollAppear3);


