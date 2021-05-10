import { html, TemplateResult } from 'lit-html';
import './button.register.js';

export const buttonCommonArgTypes = {
	buttonText: { control: 'text' },
	onClick: { action: 'Button clicked', table: { disable: true } },
	disabled: { control: 'boolean' },
	small: { control: 'boolean' },
	variant: {
		defaultValue: 'primary',
		control: { type: 'radio', options: ['primary', 'secondary'] },
	},
};

export default {
	title: 'Button/Primary',
	component: 'skf-button',
	argTypes: buttonCommonArgTypes,
	includeStories: /^[A-Z]/,
};

export interface Story<T> {
	(args: T): TemplateResult;
	args?: Partial<T>;
	argTypes?: Record<string, unknown>;
}

export interface ButtonArgTypes {
	buttonText: string;
	onClick: Function;
	disabled: boolean;
	small: boolean;
	variant: 'primary' | 'secondary';
}

export const buttonTemplate: Story<ButtonArgTypes> = ({
	buttonText,
	onClick,
	disabled,
	small,
	variant,
}: ButtonArgTypes) => html`
	<skf-button @click=${onClick} ?disabled=${disabled} ?small=${small} variant=${variant}>
		${buttonText}
	</skf-button>
`;

export const Regular = buttonTemplate.bind({});
Regular.args = {
	buttonText: 'Regular',
};

export const Small = buttonTemplate.bind({});
Small.args = {
	buttonText: 'Small',
	small: true,
};

export const RegularDisabled = buttonTemplate.bind({});
RegularDisabled.args = {
	buttonText: 'Regular Disabled',
	disabled: true,
};

export const SmallDisabled = buttonTemplate.bind({});
SmallDisabled.args = {
	buttonText: 'Small Disabled',
	small: true,
	disabled: true,
};
