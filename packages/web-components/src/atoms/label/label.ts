import { css, html, LitElement, property } from 'lit-element';

export class Label extends LitElement {
	@property({ type: String })
	for: string = '';

	@property({ type: Boolean })
	required: boolean = false;

	static get styles() {
		return css`
			.label {
				display: flex;
				margin: 0 0 0.25rem;
				color: #333;
				font-weight: bold;
			}

			.label__symbol {
				color: red;
			}
		`;
	}

	render() {
		return html`
			<label class="label" for=${this.for}>
				<slot></slot>
				${this.required ? html` <i class="label__symbol" aria-hidden="true">*</i>` : null}
			</label>
		`;
	}
}

export function labelRegister() {
	if (!window.customElements.get('skf-label')) {
		window.customElements.define('skf-label', Label);
	}
}
