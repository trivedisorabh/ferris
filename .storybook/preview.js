import React from 'react';
import GlobalStyles from '../src/common/global-styles/GlobalStyles';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

export const decorators = [
	(Story) => (
		<>
			<GlobalStyles />
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		</>
	),
];
