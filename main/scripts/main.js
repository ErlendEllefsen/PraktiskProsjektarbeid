/* Main JS Doucument */


//Giga Menu

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


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

// Hide navbar when scrolling down, show nav bar when scrolling up.
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-8vh";
  }
  prevScrollpos = currentScrollPos;
}