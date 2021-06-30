module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'scope-case': [2, 'always', 'sentence-case'],
		'subject-case': [2, 'always', 'sentence-case'],
		'type-enum': [
			2,
			'always',
			[
				'Build',
				'Config',
				'Docs',
				'Feature',
				'Fix',
				'Refactor',
				'Revert',
				'Scripts',
				'Style',
				'Test',
			],
		],
		'type-case': [2, 'always', 'sentence-case'],
	},
};
