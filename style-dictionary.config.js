/* eslint-disable @typescript-eslint/no-var-requires */

/**
 * Style-dictionary.config.js
 */
const JsonToTS = require('json-to-ts');
const StyleDictionary = require('style-dictionary');
const { minifyDictionary } = StyleDictionary.formatHelpers;

function capitalize(str) {
	return str[0].toUpperCase() + str.slice(1);
}

function getCategory(obj) {
	return Object.keys(obj)[0];
}

StyleDictionary.registerFormat({
	name: 'custom/typescript/module-declarations',
	formatter: function ({ dictionary }) {
		// Use the first key in the filtered object as category name
		const category = getCategory(dictionary.tokens);
		// Define the exported default/root interface
		const rootName = capitalize(category);
		// Minify the tokens object
		const tokens = minifyDictionary(dictionary.tokens[category]);

		return [
			...JsonToTS(tokens, { rootName }),
			`const ${rootName}: ${rootName} = ${JSON.stringify(tokens, null, 2)};`,
			`export default ${rootName};`,
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

/**
 * Tokens
 */
module.exports = {
	source: ['.tmp/**/*.json'],
	platforms: {
		ts: {
			transformGroup: 'js',
			buildPath: './src/tokens/',
			files: [
				{
					format: 'custom/typescript/module-declarations',
					destination: './colors/Colors.ts',
					filter: 'isColor',
				},
			],
		},
	},
};
