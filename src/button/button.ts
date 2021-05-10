import { html, css, LitElement, property } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { tokens } from './button.tokens';

type variant = 'primary' | 'secondary';

export class Button extends LitElement {
	@property({ type: Boolean })
	disabled: boolean = false;

	@property({ type: Boolean })
	small: boolean = false;

	@property({ type: String })
	variant: variant = 'primary';

	static get styles() {
		return css`
			button {
				min-width: ${tokens.buttonMinWidth};
				height: 40px;
				padding: 0 ${tokens.buttonHorizontalPadding};
				border-radius: ${tokens.buttonBorderRadius};
				cursor: pointer;
				font-size: 1rem;
				font-weight: bold;
				transition-duration: ${tokens.transitionDuration};
				transition-property: background-color, color;
			}

			button.primary {
				border: none;
				background-color: ${tokens.buttonPrimaryBgColor};
				color: ${tokens.buttonPrimaryTextColor};
			}

			button.primary:hover {
				background-color: ${tokens.buttonPrimaryHoverBgColor};
			}

			button.primary:active {
				background-color: ${tokens.buttonPrimaryActiveBgColor};
			}

			button.secondary {
				border: 1px solid ${tokens.buttonSecondaryBorderColor};
				background-color: ${tokens.buttonSecondaryBgColor};
				color: ${tokens.buttonSecondaryTextColor};
			}

			button.secondary:hover {
				background-color: ${tokens.buttonSecondaryHoverBgColor};
			}

			button.secondary:active {
				background-color: ${tokens.buttonSecondaryActiveBgColor};
			}

			button:focus-visible {
				outline-color: ${tokens.buttonPrimaryBgColor};
				outline-offset: 2px;
				outline-style: solid;
				outline-width: 2px;
			}

			button:disabled,
			button:disabled:hover,
			button:disabled:active {
				border: none;
				background-color: ${tokens.buttonDisabledBgColor};
				color: ${tokens.buttonDisabledTextColor};
				cursor: not-allowed;
			}

			@supports not selector(:focus-visible) {
				button:focus {
					outline-color: ${tokens.buttonPrimaryBgColor};
					outline-offset: 2px;
					outline-style: solid;
					outline-width: 2px;
				}
			}

			button.small {
				min-width: ${tokens.buttonSmallMinWidth};
				height: 30px;
				font-size: 0.875rem;
			}
		`;
	}

	getClass() {
		return classMap({
			small: this.small,
			primary: this.variant === 'primary',
			secondary: this.variant === 'secondary',
		});
	}

	render() {
		return html`<button ?disabled=${this.disabled} class=${this.getClass()}>
			<slot></slot>
		</button>`;
	}
}
