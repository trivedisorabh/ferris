import { TextInput } from './text-input.js';

if (!window.customElements.get('skf-text-input')) {
	window.customElements.define('skf-text-input', TextInput);
}
