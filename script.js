
document.addEventListener("DOMContentLoaded", () => {
anime({
  targets: '#intros path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  fill: '#FFF',
  duration: 1500,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: false
	});
});



	anime({
		targets: `.intro`,
		translateX: [-100, 0],
		easing: "easeOutExpo",
		duration: 1200,
		delay: 1000,
		opacity: [0, 1],
	});

	// anime({
	// 	targets: `.h1`,
	// 	translateX: [-100, 0],
	// 	easing: "easeOutExpo",
	// 	duration: 1200,
	// 	opacity: [0, 1],
	// });


	// anime({
	// 	targets: `.project-par`,
	// 	easing: "linear",
	// 	duration: 1500,
	// 	delay: anime.stagger(300),
	// 	opacity: [0, 1],
	// });

AOS.init();