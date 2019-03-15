/* Main JS Doucument */

var Played = false;

//Delay



//Scroll Disable
function noscroll() {
  var y = element.getBoundingClientRect().top;
  window.scrollTo(0, y);
  console.log(y);
}

//Giga Menu
	


function openNav() {
  document.getElementById("myNav").style.width = "100%";
  document.getElementById("myContent").style.opacity = "1";
  document.getElementById("myCloseBtn").style.opacity = "1";
  document.getElementById("header").style.opacity = "0";
  window.addEventListener('scroll', noscroll);
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.getElementById("myContent").style.opacity = "0";
  document.getElementById("myCloseBtn").style.opacity = "0";
  document.getElementById("header").style.opacity = "1";
  window.removeEventListener('scroll', noscroll);
}

//Splitscreen

function splitScroll() {
	const controller = new ScrollMagic.Controller();

	new ScrollMagic.Scene({
		duration: '400%', 
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
	var animePath = document.querySelector('.my-path');
	var introPosition = introText.getBoundingClientRect().top;
	var screenPosition = window.innerHeight / 1.5;
	var animePosition = window.innerHeight / 1.3;

	if (introPosition < screenPosition) {
		introText.classList.add('intro-appear');
	}
	

	if (!Played && introPosition < animePosition) {
		
		var lineDrawing = anime({
    		targets: '#lineDrawing .lines path',
    		strokeDashoffset: [anime.setDashoffset, 0],
    		easing: 'easeInOutSine',
    		duration: 4000
		});
		animePath.classList.add('path-appear');
		Played=true;
		
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

function scollAppear4(){
	var introText = document.querySelector('.intro-text-4');
	var introPosition = introText.getBoundingClientRect().top;
	var screenPosition = window.innerHeight / 1.5;

	if (introPosition < screenPosition) {
		introText.classList.add('intro-appear');
	}
}

	window.addEventListener('scroll',scollAppear4);

function scollAppear5(){
	var introText = document.querySelector('.intro-text-5');
	var introPosition = introText.getBoundingClientRect().top;
	var screenPosition = window.innerHeight / 1.5;

	if (introPosition < screenPosition) {
		introText.classList.add('intro-appear');
	}
}

	window.addEventListener('scroll',scollAppear5);

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

