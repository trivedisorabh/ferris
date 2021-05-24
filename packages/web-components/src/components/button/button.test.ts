import { expect, fixture, html } from '@open-wc/testing';
import { Button, buttonRegister } from './button.js';

before(() => {
	buttonRegister();
});

describe('Button', () => {
	it('displays text put into it', async () => {
		const element = await fixture<Button>(html`<skf-button>Hello</skf-button>`);
		expect(element.innerHTML).to.equal('Hello');
	});

	it('sets the right class when the small attribute is applied', async () => {
		const element = await fixture<Button>(html`<skf-button small>Small</skf-button>`);
		const buttonElement = element.shadowRoot?.querySelector('button');
		expect(buttonElement?.classList.contains('small')).to.equal(true);
	});

	it('sets the right class when no variant is applied', async () => {
		const element = await fixture<Button>(html`<skf-button>Primary</skf-button>`);
		const buttonElement = element.shadowRoot?.querySelector('button');
		expect(buttonElement?.classList.contains('primary')).to.equal(true);
	});

	it('sets the right class when variant secondary is applied', async () => {
		const element = await fixture<Button>(
			html`<skf-button variant="secondary">Secondary</skf-button>`
		);
		const buttonElement = element.shadowRoot?.querySelector('button');
		expect(buttonElement?.classList.contains('secondary')).to.equal(true);
	});

	it('sets the right class when variant link is applied', async () => {
		const element = await fixture<Button>(html`<skf-button variant="link">Secondary</skf-button>`);
		const buttonElement = element.shadowRoot?.querySelector('button');
		expect(buttonElement?.classList.contains('link')).to.equal(true);
	});

	it('disables the button when the disabled attribute is applied', async () => {
		const element = await fixture<Button>(html`<skf-button disabled>Disabled</skf-button>`);
		const buttonElement = element.shadowRoot?.querySelector('button');
		expect(buttonElement?.disabled).to.equal(true);
	});

	it('passes the a11y audit', async () => {
		const element = await fixture<Button>(html`<skf-button>Click</skf-button>`);
		expect(element).shadowDom.to.be.accessible();
	});
});
