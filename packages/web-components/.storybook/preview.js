import { html } from 'lit-element';

export const decorators = [
	(Story) => html`<div
		style="
		margin: 3em;
		font-size: 100%;
		font-family:
			system-ui,
			-apple-system,
			'Segoe UI',
			Roboto,
			Helvetica,
			Arial,
			sans-serif,
			'Apple Color Emoji',
			'Segoe UI Emoji';"
	>
		${Story()}
	</div>`,
];

export const parameters = {
	options: {
		storySort: {
			method: 'alphabetical',
		},
	},
};
