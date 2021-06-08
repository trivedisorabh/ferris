/* eslint-disable @typescript-eslint/no-var-requires */

/**
 * Style-dictionary.config.js
 */
const JsonToTS = require('json-to-ts');
const StyleDictionary = require('style-dictionary');
const { minifyDictionary } = StyleDictionary.formatHelpers;

function getCategory(obj) {
	return Object.keys(obj)[0];
}

function toPascalCase(str) {
	const words = str.match(/[a-z]+/gi);
	if (!words) return '';
	return words
		.map(function (word) {
			return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
		})
		.join('');
}

StyleDictionary.registerFormat({
	name: 'custom/typescript/module-declarations',
	formatter: function ({ dictionary }) {
		// Use the first key in the filtered object as category name
		const category = getCategory(dictionary.tokens);
		// Define the root interface
		const rootName = toPascalCase(category);
		// Define the default module export
		const moduleName = `${rootName}s`;
		// Minify the tokens object
		const tokens = minifyDictionary(dictionary.tokens[category]);

		return [
			...JsonToTS(tokens, { rootName }),
			`const ${moduleName}: ${rootName} = ${JSON.stringify(tokens, null, 2)};`,
			`export default ${moduleName};`,
		].join('\n\n');
	},
});

/**
 * Filters
 */

// Color
StyleDictionary.registerFilter({
	name: 'isColor',
	matcher: function (token) {
		return token.attributes.category === 'color';
	},
});

// Font-family
StyleDictionary.registerFilter({
	name: 'isFontFamily',
	matcher: function (token) {
		return token.attributes.category === 'font-family';
	},
});

// Font-size
StyleDictionary.registerFilter({
	name: 'isFontSize',
	matcher: function (token) {
		return token.attributes.category === 'font-size';
	},
});

// Font-weight
StyleDictionary.registerFilter({
	name: 'isFontWeight',
	matcher: function (token) {
		return token.attributes.category === 'font-weight';
	},
});

// Line-height
StyleDictionary.registerFilter({
	name: 'isLineHeight',
	matcher: function (token) {
		return token.attributes.category === 'line-height';
	},
});

// Size
StyleDictionary.registerFilter({
	name: 'isSize',
	matcher: function (token) {
		return token.attributes.category === 'size';
	},
});

// Spacing
StyleDictionary.registerFilter({
	name: 'isSpacing',
	matcher: function (token) {
		return token.attributes.category === 'spacing';
	},
});

StyleDictionary.registerTransform({
	name: 'size/custom',
	type: 'value',
	transformer: function (token) {
		switch (token.attributes.category) {
			case 'font-size':
			case 'spacing':
				return (parseInt(token.original.value) / 16).toString() + 'rem';
			default:
				return token.original.value + 'px';
		}
	},
});

/**
 * Tokens
 */
module.exports = {
	source: ['.tmp/**/*.json'],
	platforms: {
		default: {
			buildPath: './src/tokens/',
			transforms: ['attribute/cti', 'name/cti/pascal', 'size/custom', 'color/rgb'],
			files: [
				{
					format: 'custom/typescript/module-declarations',
					destination: './colors/Colors.ts',
					filter: 'isColor',
				},
				{
					format: 'custom/typescript/module-declarations',
					destination: './font-families/FontFamilies.ts',
					filter: 'isFontFamily',
				},
				{
					format: 'custom/typescript/module-declarations',
					destination: './font-sizes/FontSizes.ts',
					filter: 'isFontSize',
				},
				{
					format: 'custom/typescript/module-declarations',
					destination: './font-weights/FontWeights.ts',
					filter: 'isFontWeight',
				},
				{
					format: 'custom/typescript/module-declarations',
					destination: './line-heights/LineHeights.ts',
					filter: 'isLineHeight',
				},
				{
					format: 'custom/typescript/module-declarations',
					destination: './sizes/Sizes.ts',
					filter: 'isSize',
				},
				{
					format: 'custom/typescript/module-declarations',
					destination: './spacings/Spacings.ts',
					filter: 'isSpacing',
				},
			],
		},
	},
};
