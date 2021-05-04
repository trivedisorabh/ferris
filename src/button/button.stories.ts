import { html, TemplateResult } from 'lit-html';
import './button.register.js';

export default {
	title: 'Button/Primary',
	component: 'skf-button',
	argTypes: {
		buttonText: { control: 'text' },
		onClick: { action: 'Button clicked', table: { disable: true } },
		disabled: { control: 'boolean' },
		small: { control: 'boolean' },
	},
};

interface Story<T> {
	(args: T): TemplateResult;
	args?: Partial<T>;
	argTypes?: Record<string, unknown>;
}

interface ArgTypes {
	buttonText?: string;
	onClick: Function;
	disabled?: boolean;
	small?: boolean;
}

const Template: Story<ArgTypes> = ({ buttonText, onClick, disabled, small }: ArgTypes) => html`
	<skf-button @click=${onClick} ?disabled=${disabled} ?small=${small}> ${buttonText} </skf-button>
`;

export const Regular = Template.bind({});
Regular.args = {
	buttonText: 'Regular',
};

export const Small = Template.bind({});
Small.args = {
	buttonText: 'Small',
	small: true,
};

export const RegularDisabled = Template.bind({});
RegularDisabled.args = {
	buttonText: 'Regular Disabled',
	disabled: true,
};

export const SmallDisabled = Template.bind({});
SmallDisabled.args = {
	buttonText: 'Small Disabled',
	small: true,
	disabled: true,
};
