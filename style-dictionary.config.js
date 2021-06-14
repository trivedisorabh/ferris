/* eslint-disable @typescript-eslint/no-var-requires */

/**
 * Style-dictionary.config.js
 */
const jsonToTsEnum = require('./scripts/jsonToTsEnum');
const StyleDictionary = require('style-dictionary');
const { minifyDictionary } = StyleDictionary.formatHelpers;

/**
 * Helpers
 */

/* Helper to simplify filtering within files */
function getFilter(cat) {
	return { attributes: { category: cat } };
}

/* Return the first key in passed object */
function getCategory(obj) {
	return Object.keys(obj)[0];
}

/* Transform the category name to PascalCase */
function toPascalCase(str) {
	const words = str.match(/[a-z]+/gi);
	if (!words) return '';
	return words
		.map(function (word) {
			return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
		})
		.join('');
}

/* Transform `tokens` keys to camelCase */
function kebabToCamelCase(tokens) {
	Object.keys(tokens).map((key) => {
		if (key.includes('-')) {
			let arr = key.split('-');
			let newKey = arr.map((item, index) =>
				index ? item.charAt(0).toUpperCase() + item.slice(1).toLowerCase() : item.toLowerCase()
			);

			newKey = newKey.join('');

			// Update all object keys that has changed:
			if (key !== newKey) {
				Object.defineProperty(tokens, newKey, Object.getOwnPropertyDescriptor(tokens, key));
				delete tokens[key];
			}
		}
	});
}

/**
 * Formatters
 */
StyleDictionary.registerFormat({
	name: 'custom/typescript/module-declarations',
	formatter: function ({ dictionary }) {
		// Use the first key in the filtered object as category name
		const category = getCategory(dictionary.tokens);
		// Make sure category name is in PascalCase
		const categoryName = toPascalCase(category);
		// Define the root interface
		const rootName = `${categoryName}s`;
		// Minify the tokens object
		const tokens = minifyDictionary(dictionary.tokens[category]);
		// Transform `tokens` keys to camelCase
		kebabToCamelCase(tokens);

		return jsonToTsEnum(rootName, tokens);
	},
});

/**
 * Transforms
 */

/* Not used at the moment */
StyleDictionary.registerTransform({
	name: 'custom/size',
	type: 'value',
	transitive: true,
	transformer: function (token) {
		switch (token.attributes.category) {
			case 'size':
				return token.value + 'px';
			default:
				return token.value;
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
			transforms: ['attribute/cti', 'name/cti/pascal', 'color/rgb'],
			files: [
				{
					destination: './colors/Colors.ts',
					format: 'custom/typescript/module-declarations',
					filter: getFilter('color'),
				},
				{
					destination: './fonts/Fonts.ts',
					filter: getFilter('font'),
					format: 'custom/typescript/module-declarations',
				},
				{
					destination: './font-sizes/FontSizes.ts',
					filter: getFilter('font-size'),
					format: 'custom/typescript/module-declarations',
				},
				{
					destination: './font-weights/FontWeights.ts',
					filter: getFilter('font-weight'),
					format: 'custom/typescript/module-declarations',
				},
				{
					destination: './line-heights/LineHeights.ts',
					filter: getFilter('line-height'),
					format: 'custom/typescript/module-declarations',
				},
				{
					destination: './sizes/Sizes.ts',
					filter: getFilter('size'),
					format: 'custom/typescript/module-declarations',
				},
				{
					destination: './spacings/Spacings.ts',
					filter: getFilter('spacing'),
					format: 'custom/typescript/module-declarations',
				},
			],
		},
	},
};
