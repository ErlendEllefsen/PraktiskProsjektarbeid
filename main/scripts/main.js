/* Main JS Doucument */

var Played = false;

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
		triggerElement:'.bo-title',
		triggerHook: 0
	})

	.setPin('.bo-title')
	.addTo(controller)

	new ScrollMagic.Scene({
		duration: '400%', 
		triggerElement:'.porsgrunn-title',
		triggerHook: 0
	})


	.setPin('.porsgrunn-title')
	.addTo(controller);

}

splitScroll();


//Svg Animations

function drawMap(){

	var introText = document.querySelector('.intro-text-1');
	var introPosition = introText.getBoundingClientRect().top;
	var animePosition = window.innerHeight / 1.3;


	if (!Played && introPosition < animePosition) {

		function drawAppear(){
			document.getElementById("lineDrawing").style.opacity = "1";
		} window.addEventListener('scroll', drawAppear);


		
		var lineDrawing = anime({
    		targets: '#lineDrawing .lines path',
    		strokeDashoffset: [anime.setDashoffset, 0],
    		easing: 'easeInOutCubic',
    		duration: 3000
		});

		

	
		
		Played=true;
	}

}

	window.addEventListener('scroll', drawMap);
//Appeareffect

 function scollAppear1(){
	
	var introText = document.querySelector('.intro-text-1');
	var introText2 = document.querySelector('.intro-text-2');
	var introText3 = document.querySelector('.intro-text-3');
	var introText4 = document.querySelector('.intro-text-4');	
	var introText5 = document.querySelector('.intro-text-5');

	var animePath = document.querySelector('.my-path');
	var introPosition = introText.getBoundingClientRect().top;
	var introPosition2 = introText2.getBoundingClientRect().top;
	var introPosition3 = introText3.getBoundingClientRect().top;
	var introPosition4 = introText4.getBoundingClientRect().top;
	var introPosition5 = introText5.getBoundingClientRect().top;
	var screenPosition = window.innerHeight / 1.5;
	var animePosition = window.innerHeight / 1.3;

	if (introPosition < screenPosition)
		introText.classList.add('intro-appear');
	if (introPosition2 < screenPosition)
		introText2.classList.add('intro-appear');
	if (introPosition3 < screenPosition)
		introText3.classList.add('intro-appear');
	if (introPosition4 < screenPosition)
		introText4.classList.add('intro-appear');
	if (introPosition5 < screenPosition)
		introText5.classList.add('intro-appear');

}
	window.addEventListener('scroll',scollAppear1);

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

