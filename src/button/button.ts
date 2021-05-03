import { html, css, LitElement, property } from 'lit-element';
import { tokens } from './button.tokens';

export class Button extends LitElement {
	@property({ type: Boolean })
	disabled: boolean = false;

	@property({ type: Boolean })
	small: boolean = false;

	static get styles() {
		return css`
			button {
				min-width: ${tokens.buttonMinWidth};
				height: 40px;
				padding: 0 ${tokens.buttonHorizontalPadding};
				border: none;
				background-color: ${tokens.buttonPrimaryBgColor};
				border-radius: ${tokens.buttonBorderRadius};
				color: ${tokens.buttonPrimaryTextColor};
				cursor: pointer;
				font-size: 1rem;
				font-weight: bold;
				transition-duration: ${tokens.transitionDuration};
				transition-property: background-color, color;
			}

			button:hover {
				background-color: ${tokens.buttonPrimaryHoverBgColor};
			}

			button:active {
				background-color: ${tokens.buttonPrimaryActiveBgColor};
			}

			button:disabled {
				background-color: ${tokens.buttonDisabledBgColor};
				color: ${tokens.buttonDisabledTextColor};
				cursor: not-allowed;
			}

			button:focus {
				outline-color: ${tokens.buttonPrimaryBgColor};
				outline-offset: 2px;
				outline-style: solid;
				outline-width: 2px;
			}

			button.small {
				min-width: ${tokens.buttonSmallMinWidth};
				height: 30px;
				font-size: 0.875rem;
			}
		`;
	}

	render() {
		return html`<button
			?disabled=${this.disabled}
			class="${this.small ? 'small' : ''}"
		>
			<slot></slot>
		</button>`;
	}
}
