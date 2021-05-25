import React, { ReactElement } from 'react';
import Button, { ButtonProps } from './Button';

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
	title: 'Form/Button/Primary',
	component: 'skf-button',
	argTypes: buttonCommonArgTypes,
	includeStories: /^[A-Z]/,
};

export interface Story<T> {
	(args: T): ReactElement;
	args?: Partial<T>;
	argTypes?: Record<string, unknown>;
}

export const buttonTpl: Story<ButtonProps> = ({
	children,
	variant,
	isDisabled,
	small,
}: ButtonProps) => (
	<Button
		isDisabled={isDisabled}
		onClick={() => alert('Dummy click')}
		small={small}
		variant={variant}
	>
		{children}
	</Button>
);

export const Regular = buttonTpl.bind({});
Regular.args = {
	children: 'Regular',
};

export const RegularDisabled = buttonTpl.bind({});
RegularDisabled.args = {
	children: 'Regular Disabled',
	isDisabled: true,
};

export const Small = buttonTpl.bind({});
Small.args = {
	children: 'Small',
	small: true,
};

export const SmallDisabled = buttonTpl.bind({});
SmallDisabled.args = {
	children: 'Small Disabled',
	isDisabled: true,
	small: true,
};
