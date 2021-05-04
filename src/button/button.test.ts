import { html, fixture, expect } from '@open-wc/testing';

import { Button } from './button.js';
import './button.register.js';

describe('Button', () => {
	it('displays text put into it', async () => {
		const element = await fixture<Button>(html`<skf-button>Hello</skf-button>`);

		expect(element.innerHTML).to.equal('Hello');
	});

	it('sets the right class when the small attribute is applied', async () => {
		const element = await fixture<Button>(html`<skf-button small>Small</skf-button>`);

		const buttonElement = element.shadowRoot?.querySelector('button');

		await expect(buttonElement?.classList.contains('small')).to.equal(true);
	});

	it('disables the button when the disabled attribute is applied', async () => {
		const element = await fixture<Button>(html`<skf-button disabled>Disabled</skf-button>`);

		const buttonElement = element.shadowRoot?.querySelector('button');

		await expect(buttonElement?.disabled).to.equal(true);
	});

	it('passes the a11y audit', async () => {
		const element = await fixture<Button>(html`<skf-button>Click</skf-button>`);

		await expect(element).shadowDom.to.be.accessible();
	});
});
