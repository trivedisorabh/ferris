module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	rootDir: '.',
	roots: ['<rootDir>/src'],
	moduleNameMapper: {
		'~tokens/(.*)': ['<rootDir>/src/tokens/$1'],
		'~components/(.*)': ['<rootDir>/src/components/$1'],
		'~atoms/(.*)': ['<rootDir>/src/atoms/$1'],
	},
};
