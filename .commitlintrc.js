module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'scope-case': [2, 'always', 'sentence-case'],
		'subject-case': [2, 'always', 'sentence-case'],
		'type-enum': [2, 'always', ['Feature', 'Fix', 'Docs', 'Style', 'Refactor', 'Test', 'Revert']],
		'type-case': [2, 'always', 'sentence-case'],
	},
};
