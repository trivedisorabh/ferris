import { html, TemplateResult } from 'lit-html';
import './hello-world.register.js';

export default {
  title: 'HelloWorld',
  component: 'hello-world',
  argTypes: {
    name: { control: 'text' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  name?: string;
}

const Template: Story<ArgTypes> = ({ name = 'World' }: ArgTypes) => html`
  <hello-world .name=${name}> </hello-world>
`;

export const Regular = Template.bind({});

export const CustomName = Template.bind({});
CustomName.args = {
  name: 'My name',
};
