const AnimationVariants = {
	modalAnimation: {
		initial: {
			opacity: 0,
			y: 70,
		},
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.35,
			},
		},
		exit: {
			opacity: 0,
			y: 0,
		},
	},

	overlayAnimation: {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
			transition: {
				duration: 0.2,
			},
		},
		exit: {
			opacity: 0,
		},
	},

	fadeIn: {
		initial: {
			y: "-90px",
			opacity: 0,
		},
		animate: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.6,
			},
		},
	},

	fadeIn2: {
		initial: {
			opacity: 0,
			scale: 0.5,
		},
		animate: {
			scale: 1,
			opacity: 1,
			transition: {
				duration: 2,
			},
		},
	},

	slideIn: {
		initial: {
			y: 300,
			opacity: 0,
		},
		animate: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 1.8,
			},
		},
	},

	productsAnimation: {
		initial: {
			x: 500,
			opacity: 0,
		},
		animate: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 1.2,
				delay: 0.5,
			},
		},
	},
};

export default AnimationVariants;
