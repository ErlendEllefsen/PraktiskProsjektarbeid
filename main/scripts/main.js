/* Main JS Doucument */


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

	new ScrollMagic.Scene({
		duration: '400%', 
		triggerElement:'.notodden-title',
		triggerHook: 0
	})


	.setPin('.notodden-title')
	.addTo(controller);

	new ScrollMagic.Scene({
		duration: '400%', 
		triggerElement:'.tinn-title',
		triggerHook: 0
	})


	.setPin('.tinn-title')
	.addTo(controller);

}

splitScroll();


//Svg Animations

var Played = false;
var Played2 = false;
var Played3 = false;
var Played4 = false;


function drawMap(){

	var introText = document.querySelector('.intro-text-1');
	var introText6 = document.querySelector('.intro-text-6');
	var introText11 = document.querySelector('.intro-text-11');
	var introText16 = document.querySelector('.intro-text-16');
	var introPosition = introText.getBoundingClientRect().top;
	var introPosition6 = introText6.getBoundingClientRect().top;
	var introPosition11 = introText11.getBoundingClientRect().top;
	var introPosition16 = introText16.getBoundingClientRect().top;
	var animePosition = window.innerHeight / 1.3;

	if (!Played && introPosition < animePosition) {

		function drawAppear1(){
			document.getElementById("lineDrawing").style.opacity = "1";
		} window.addEventListener('scroll', drawAppear1);
		
		var lineDrawing = anime({
    		targets: '#lineDrawing .lines path',
    		strokeDashoffset: [anime.setDashoffset, 0],
    		easing: 'easeInOutSine',
    		duration: 3000
		});

		Played=true;
	}
	if (!Played2 && introPosition6 < animePosition) {

		function drawAppear2(){
			document.getElementById("lineDrawing2").style.opacity = "1";
		} window.addEventListener('scroll', drawAppear2);
		
		var lineDrawing2 = anime({
    		targets: '#lineDrawing2 .lines path',
    		strokeDashoffset: [anime.setDashoffset, 0],
    		easing: 'easeInOutSine',
    		duration: 3000
		});

		Played2=true;
	}

	if (!Played3 && introPosition11 < animePosition) {

		function drawAppear3(){
			document.getElementById("lineDrawing3").style.opacity = "1";
		} window.addEventListener('scroll', drawAppear3);
		
		var lineDrawing3 = anime({
    		targets: '#lineDrawing3 .lines path',
    		strokeDashoffset: [anime.setDashoffset, 0],
    		easing: 'easeInOutSine',
    		duration: 3000
		});

		Played3=true;
	}

	if (!Played4 && introPosition16 < animePosition) {

		function drawAppear4(){
			document.getElementById("lineDrawing4").style.opacity = "1";
		} window.addEventListener('scroll', drawAppear4);
		
		var lineDrawing4 = anime({
    		targets: '#lineDrawing4 .lines path',
    		strokeDashoffset: [anime.setDashoffset, 0],
    		easing: 'easeInOutSine',
    		duration: 3000
		});

		Played4=true;
	}
	

}

	window.addEventListener('scroll', drawMap);
//Appeareffect

 function scollAppear(){
	
	var introText1 = document.querySelector('.intro-text-1');
	var introText2 = document.querySelector('.intro-text-2');
	var introText3 = document.querySelector('.intro-text-3');
	var introText4 = document.querySelector('.intro-text-4');	
	var introText5 = document.querySelector('.intro-text-5');
	var introText6 = document.querySelector('.intro-text-6');
	var introText7 = document.querySelector('.intro-text-7');
	var introText8 = document.querySelector('.intro-text-8');
	var introText9 = document.querySelector('.intro-text-9');
	var introText10 = document.querySelector('.intro-text-10');	
	var introText11 = document.querySelector('.intro-text-11');
	var introText12 = document.querySelector('.intro-text-12');
	var introText13 = document.querySelector('.intro-text-13');
	var introText14 = document.querySelector('.intro-text-14');
	var introText15 = document.querySelector('.intro-text-15');
	var introText16 = document.querySelector('.intro-text-16');	
	var introText17 = document.querySelector('.intro-text-17');
	var introText18 = document.querySelector('.intro-text-18');
	var introText19 = document.querySelector('.intro-text-19');
	var introText20 = document.querySelector('.intro-text-20');

	var introPosition1 = introText1.getBoundingClientRect().top;
	var introPosition2 = introText2.getBoundingClientRect().top;
	var introPosition3 = introText3.getBoundingClientRect().top;
	var introPosition4 = introText4.getBoundingClientRect().top;
	var introPosition5 = introText5.getBoundingClientRect().top;
	var introPosition6 = introText6.getBoundingClientRect().top;
	var introPosition7 = introText7.getBoundingClientRect().top;
	var introPosition8 = introText8.getBoundingClientRect().top;
	var introPosition9 = introText9.getBoundingClientRect().top;
	var introPosition10 = introText10.getBoundingClientRect().top;
	var introPosition11 = introText11.getBoundingClientRect().top;
	var introPosition12 = introText12.getBoundingClientRect().top;
	var introPosition13 = introText13.getBoundingClientRect().top;
	var introPosition14 = introText14.getBoundingClientRect().top;
	var introPosition15 = introText15.getBoundingClientRect().top;
	var introPosition16 = introText16.getBoundingClientRect().top;
	var introPosition17 = introText17.getBoundingClientRect().top;
	var introPosition18 = introText18.getBoundingClientRect().top;
	var introPosition19 = introText19.getBoundingClientRect().top;
	var introPosition20 = introText20.getBoundingClientRect().top;

	var screenPosition = window.innerHeight / 1.5;

	if (introPosition1 < screenPosition)
		introText1.classList.add('intro-appear');
	if (introPosition2 < screenPosition)
		introText2.classList.add('intro-appear');
	if (introPosition3 < screenPosition)
		introText3.classList.add('intro-appear');
	if (introPosition4 < screenPosition)
		introText4.classList.add('intro-appear');
	if (introPosition5 < screenPosition)
		introText5.classList.add('intro-appear');
	if (introPosition6 < screenPosition)
		introText6.classList.add('intro-appear');
	if (introPosition7 < screenPosition)
		introText7.classList.add('intro-appear');
	if (introPosition8 < screenPosition)
		introText8.classList.add('intro-appear');
	if (introPosition9 < screenPosition)
		introText9.classList.add('intro-appear');
	if (introPosition10 < screenPosition)
		introText10.classList.add('intro-appear');
	if (introPosition11 < screenPosition)
		introText11.classList.add('intro-appear');
	if (introPosition12 < screenPosition)
		introText12.classList.add('intro-appear');
	if (introPosition13 < screenPosition)
		introText13.classList.add('intro-appear');
	if (introPosition14 < screenPosition)
		introText14.classList.add('intro-appear');
	if (introPosition15 < screenPosition)
		introText15.classList.add('intro-appear');
	if (introPosition16 < screenPosition)
		introText16.classList.add('intro-appear');
	if (introPosition17 < screenPosition)
		introText17.classList.add('intro-appear');
	if (introPosition18 < screenPosition)
		introText18.classList.add('intro-appear');
	if (introPosition19 < screenPosition)
		introText19.classList.add('intro-appear');
	if (introPosition20 < screenPosition)
		introText20.classList.add('intro-appear');


}
	window.addEventListener('scroll',scollAppear);

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

//Slider 

$('.variable-width').slick({
  dots: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  arrows: false,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 1000,
  rtl: true,
  pauseOnHover: true,
  
});

$('.variable-width1').slick({
  dots: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  arrows: false,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 1000,
  pauseOnHover: true,

});


const slider = $(".slider-item");

slider.on('wheel', (function(e) {
  e.preventDefault();

  if (e.originalEvent.deltaY < 0) {
    $(this).slick('slickNext');
  } else {
    $(this).slick('slickPrev');
  }
}));

//Slider Slutt

