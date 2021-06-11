export interface ColorProps {
	blue: Blue;
	black: string;
	brand: Blue;
	white: string;
	gray: Gray;
	green: Blue;
	red: Blue;
	yellow: Blue;
	blackBrand: string;
}

interface Gray {
	base: string;
	basedark: string;
	baselight: string;
	dark: string;
	darker: string;
	darkest: string;
	light: string;
	lighter: string;
	lightest: string;
}

interface Blue {
	base: string;
	dark: string;
	darker: string;
}

const Colors: ColorProps = {
	blue: {
		base: 'rgb(132, 169, 233)',
		dark: 'rgb(79, 132, 224)',
		darker: 'rgb(51, 85, 145)',
	},
	black: 'rgb(0, 0, 0)',
	brand: {
		base: 'rgb(15, 88, 214)',
		dark: 'rgb(12, 74, 182)',
		darker: 'rgb(9, 57, 139)',
	},
	white: 'rgb(255, 255, 255)',
	gray: {
		base: 'rgb(213, 216, 220)',
		basedark: 'rgb(199, 202, 208)',
		baselight: 'rgb(226, 228, 231)',
		dark: 'rgb(170, 175, 184)',
		darker: 'rgb(128, 136, 149)',
		darkest: 'rgb(103, 111, 124)',
		light: 'rgb(235, 236, 238)',
		lighter: 'rgb(246, 246, 246)',
		lightest: 'rgb(248, 248, 248)',
	},
	green: {
		base: 'rgb(4, 137, 66)',
		dark: 'rgb(3, 116, 56)',
		darker: 'rgb(2, 89, 42)',
	},
	red: {
		base: 'rgb(204, 0, 0)',
		dark: 'rgb(173, 0, 0)',
		darker: 'rgb(132, 0, 0)',
	},
	yellow: {
		base: 'rgb(255, 228, 138)',
		dark: 'rgb(255, 215, 79)',
		darker: 'rgb(255, 202, 21)',
	},
	blackBrand: 'rgb(39, 51, 66)',
};

export default Colors;
