interface Color {
	brand: Brand;
	core: Core;
}

interface Core {
	'600': string;
	green: string;
}

interface Brand {
	primary: string;
}

const Color: Color = {
	brand: {
		primary: '#4f98a4',
	},
	core: {
		'600': '#cccccc',
		green: '#4f98a4',
	},
};

export default Color;
