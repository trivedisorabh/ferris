import { Label } from './label.js';

if (!window.customElements.get('skf-label')) {
	window.customElements.define('skf-label', Label);
}
