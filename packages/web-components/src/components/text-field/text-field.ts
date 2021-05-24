import { css, html, LitElement, property } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { TextInput } from '~atoms/text-input/text-input.js';
import { labelRegister } from '../../atoms/label/label.js';
import { textInputRegister } from '../../atoms/text-input/text-input.js';

labelRegister();
textInputRegister();

export class TextField extends LitElement {
	@property({ type: Boolean })
	disabled: boolean = false;

	@property({ type: String })
	description: string = '';

	@property({ type: String })
	id: string = '';

	@property({ type: String })
	label: string = '';

	@property({ type: Boolean })
	required: boolean = false;

	@property({ type: String })
	type: TextInput['type'] = 'text';

	@property({ type: String })
	value: string = '';

	static get styles() {
		return css`
			.text-field__asterix {
				color: #900;
			}

			.text-field_disabled {
				opacity: 0.5;
			}
		`;
	}

	render() {
		const classNames = { 'text-field_disabled': this.disabled };

		return html`
			<div class="text-field ${classMap(classNames)}">
				<skf-label for=${this.id} ?required=${this.required}>${this.label}</skf-label>
				${this.description && html`<div class="text-field__desc">${this.description}</div>`}
				<skf-text-input
					class="text-field__text-input"
					?disabled=${this.disabled}
					id=${this.id}
					?required=${this.required}
					type=${this.type}
					value=${this.value}
				></skf-text-input>
			</div>
		`;
	}
}

export function textFieldRegister() {
	if (!window.customElements.get('skf-text-field')) {
		window.customElements.define('skf-text-field', TextField);
	}
}
