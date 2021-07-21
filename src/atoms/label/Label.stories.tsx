import React from 'react';
import Label, { LabelProps } from '~atoms/label/Label';
import { Story } from '~common/interfaces';

export default {
	title: 'Atoms/Label/Regular',
	component: Label,
	argTypes: {
		disabled: { control: 'boolean' },
		small: { control: 'boolean', defaultValue: false },
		children: { control: 'string', defaultValue: 'Label text' },
	},
	includeStories: /^[A-Z]/,
};

export const template: Story<LabelProps> = ({
	disabled,
	small,
	required,
	children,
}: LabelProps) => (
	<Label disabled={disabled} small={small} required={required}>
		{children}
	</Label>
);

export const Regular = template.bind({});
Regular.args = {};

export const Disabled = template.bind({});
Disabled.args = { disabled: true };

export const Required = template.bind({});
Required.args = { required: true };

export const RequiredDisabled = template.bind({});
RequiredDisabled.args = { disabled: true, required: true };
