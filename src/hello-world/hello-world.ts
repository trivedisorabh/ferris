import { css, html, LitElement, property } from 'lit-element';

export class HelloWorld extends LitElement {
	static styles = css`
		:host {
			color: var(--hello-world-text-color, #0a0);
			display: block;
			padding: 25px;
		}
	`;

	// Test
	@property({ type: String }) name = 'World';

	render() {
		return html`<h2>Hello ${this.name}!</h2>`;
	}
}
