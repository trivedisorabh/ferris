import { html, css, LitElement, property } from 'lit-element';

export class HelloWorld extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--hello-world-text-color, #000);
    }
  `;

  @property({ type: String }) name = 'World';

  render() {
    return html`<h2>Hello ${this.name}!</h2>`;
  }
}
