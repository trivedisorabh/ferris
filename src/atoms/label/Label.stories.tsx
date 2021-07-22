import React from 'react';
import Label, { LabelProps } from '~atoms/label/Label';
import { Story } from '~common/interfaces';

export default {
	title: 'Atoms/Label/Regular',
	component: Label,
	argTypes: {
		small: {
			control: 'boolean',
			defaultValue: false,
			description: 'If true, renders a smaller version of the component.',
		},
		disabled: {
			control: 'boolean',
			description: 'If true, makes the label appear faded and unclickable.',
		},
		required: {
			control: 'boolean',
			description: 'If true, marks the label with a red asterisk.',
		},
		htmlFor: {
			control: false,
			description:
				'If present, sets the "for" attribute on the label element. Not needed if the label is [implicit](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label).',
		},
		children: {
			table: { disable: true },
			defaultValue: 'Label text',
		},
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
