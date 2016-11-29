// CUSTOM JS FILE //
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {

		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

//paralax
// var controller=new ScrollMagic.Controller();

// var slideParallaxScene= new ScrollMagic.Scene({
// 	triggerElement: '#triger'
// 	// ,
// 	// triggerHook:1,
// 	// duration:'200%'
// })
// .setTween('#bcg',0.5,{backgroundColor:"green"})
// // .addIndicators({name: '*1'})
// .addTo(controller);
// console.log(slideParallaxScene);
// console.log(controller);

// .setTween(TweenMax.from('.bcg',1,{y:'-30%', ease:Power0.easeNone}))
// .addTo(controller);


// init controller
var controller = new ScrollMagic.Controller();

// build scene
// var scene = new ScrollMagic.Scene({triggerElement: "#trigger",backgroundColor:"green"})
// 				// trigger a velocity opaticy animation
// 				.setTween(".bcg", {opacity: 0}, {duration: 400})
// 				// .addIndicators() // add indicators (requires plugin)
// 				.addTo(controller);
var scene = new ScrollMagic.Scene({triggerElement: ".trigger", duration: 300})
							// animate color and top border in relation to scroll position
							.setTween(".content-wrapper", {borderTop: "30px solid white", backgroundColor: "blue", scale: 0.7}) // the tween durtion can be omitted and defaults to 1
							// .addIndicators({name: "2 (duration: 300)"}) // add indicators (requires plugin)
							.addTo(controller);
