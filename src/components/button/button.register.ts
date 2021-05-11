import { Button } from './button.js';

if (!window.customElements.get('skf-button')) {
	window.customElements.define('skf-button', Button);
}
