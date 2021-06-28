module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	rootDir: '.',
	moduleNameMapper: {
		'~tokens/(.*)': ['<rootDir>/src/tokens/$1'],
	},
};
