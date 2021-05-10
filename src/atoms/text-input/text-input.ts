import { css, html, LitElement, property } from 'lit-element';

type InputType =
	| 'button'
	| 'checkbox'
	| 'color'
	| 'date'
	| 'datetime-local'
	| 'datetime'
	| 'email'
	| 'file'
	| 'hidden'
	| 'image'
	| 'month'
	| 'number'
	| 'password'
	| 'radio'
	| 'range'
	| 'reset'
	| 'search'
	| 'submit'
	| 'tel'
	| 'text'
	| 'time'
	| 'url'
	| 'week';

type TextInputTypes = Extract<
	InputType,
	| 'date'
	| 'datetime-local'
	| 'datetime'
	| 'email'
	| 'hidden'
	| 'month'
	| 'number'
	| 'password'
	| 'search'
	| 'tel'
	| 'text'
	| 'time'
	| 'week'
>;

export class TextInput extends LitElement {
	@property({ type: String })
	class: string = '';

	@property({ type: Boolean })
	disabled: boolean = false;

	@property({ type: String })
	id: string = '';

	@property({ type: Boolean })
	required: boolean = false;

	@property({ type: String })
	type: TextInputTypes = 'text';

	@property({ type: String })
	value: string = '';

	static get styles() {
		return css`
			.text-input {
				padding: 0.25rem;
				border: 1px solid #ccc;
				background: #fff;
			}

			.text-input:disabled {
				background: #ddd;
				cursor: not-allowed;
			}
		`;
	}

	render() {
		return html`
			<input
				class="text-input ${this.class}"
				?disabled=${this.disabled}
				id=${this.id}
				?required=${this.required}
				type=${this.type}
				.value=${this.value}
			/>
		`;
	}
}
