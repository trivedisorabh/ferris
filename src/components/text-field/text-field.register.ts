import { TextField } from './text-field.js';

if (!window.customElements.get('skf-text-field')) {
	window.customElements.define('skf-text-field', TextField);
}
