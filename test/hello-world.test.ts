import { html, fixture, expect } from '@open-wc/testing';

import { HelloWorld } from '../src/HelloWorld.js';
import '../hello-world.js';

describe('HelloWorld', () => {
  it('has a default text "Hello World!"', async () => {
    const el = await fixture<HelloWorld>(html`<hello-world></hello-world>`);

    expect(el.name).to.equal('World');
  });

  it('can override the name via attribute', async () => {
    const name = 'Bob';
    const el = await fixture<HelloWorld>(
      html`<hello-world name=${name}></hello-world>`
    );

    expect(el.name).to.equal(name);
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<HelloWorld>(html`<hello-world></hello-world>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
