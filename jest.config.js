module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	rootDir: '.',
	roots: ['<rootDir>/src'],
	moduleNameMapper: {
		'~tokens/(.*)': ['<rootDir>/src/tokens/$1'],
		'~molecules/(.*)': ['<rootDir>/src/molecules/$1'],
		'~atoms/(.*)': ['<rootDir>/src/atoms/$1'],
		'~common/(.*)': ['<rootDir>/src/common/$1'],
	},
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
