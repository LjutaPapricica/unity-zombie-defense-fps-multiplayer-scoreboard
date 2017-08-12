const deepCopy = (obj) => {
	const newObj = {};

	for(var key in obj) {
		if(typeof obj[key] === 'object') {
			newObj[key] = deepCopy(obj[key]);
		}
		else {
			newObj[key] = obj[key];
		}
	}

	return newObj;
};

const animation = {
	none: {
		enter: {},
		leave: {}
	},
	fade: {
		enter: {
			opacity: 1.0
		},
		leave: {
			opacity: 0.0
		}
	},
	fromTop: {
		enter: {
			top: 0
		},
		leave: {
			top: -80
		}
	},
	fromBottom: {
		enter: {
			top: 0
		},
		leave: {
			top: screen.availHeight
		}
	},
	fromLeft: {
		enter: {
			left: 0
		},
		leave: {
			left: -screen.availWidth
		}
	},
	fromRight: {
		enter: {
			right: 0
		},
		leave: {
			right: -screen.availWidth
		}
	},
	combine(a1, a2) {
		const anim1 = deepCopy(a1);
		const anim2 = deepCopy(a2);
		const { enter, leave } = anim2;

		for(var key in enter) {
			anim1.enter[key] = enter[key];
		}
		for(var key in leave) {
			anim1.leave[key] = leave[key];
		}

		return anim1;
	}
};

export default animation;