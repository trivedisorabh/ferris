/* eslint-disable @typescript-eslint/no-var-requires */

/**
 * Style-dictionary.config.js
 */
const JsonToTS = require('json-to-ts');
const StyleDictionary = require('style-dictionary');
const { minifyDictionary } = StyleDictionary.formatHelpers;

/**
 * Helpers
 */

/* Helper to simplify filtering within files */
function getFilter(cat) {
	return { attributes: { category: cat } };
}

/* Returns the first key in passed object */
function getCategory(obj) {
	return Object.keys(obj)[0];
}

/* Transforms the category name to PascalCase */
function toPascalCase(str) {
	const words = str.match(/[a-z]+/gi);
	if (!words) return '';
	return words
		.map(function (word) {
			return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
		})
		.join('');
}

/**
 * Formatters
 */
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
 * Transforms
 */
StyleDictionary.registerTransform({
	name: 'size/custom',
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
			transforms: ['attribute/cti', 'name/cti/camel', 'color/rgb'],
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
