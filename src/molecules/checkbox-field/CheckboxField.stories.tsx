import React from 'react';
import { Story } from '~common/interfaces';
import CheckboxField, { CheckboxFieldProps } from './CheckboxField';

export default {
	title: 'Molecules/Checkbox field/Regular',
	component: CheckboxField,
	argTypes: {
		small: {
			defaultValue: false,
			description: 'If true, renders a smaller version of the component.',
		},
		label: {
			defaultValue: 'Checkbox label',
			description: 'Label text describing the checkbox',
		},
		defaultChecked: {
			control: false,
			description: 'If the component is uncontrolled, determines the inital state of the checkbox',
		},
		required: {
			description: 'If true, marks the label with a red asterisk.',
		},
		indeterminate: {
			control: 'boolean',
			description:
				'If true and the checkbox is not checked, makes the checkbox appear indeterminate.',
		},
		disabled: {
			control: 'boolean',
			description: 'If true, makes the component unclickable and appear faded.',
		},
		onChange: {
			control: false,
			description: 'Callback that will fire every time the component changes state',
		},
		checked: {
			control: false,
			description:
				'If set the component will be [controlled](https://reactjs.org/docs/forms.html#controlled-components)',
		},
		checkboxProps: {
			control: false,
			description:
				'Props that will be passed on the the [checkbox](/?path=/docs/atoms-checkbox-regular--checked) atom',
		},
		labelProps: {
			control: false,
			description:
				'Props that will be passed on the the [label](/?path=/docs/atoms-label-regular--regular) atom',
		},
	},
	includeStories: /^[A-Z]/,
};

const template: Story<CheckboxFieldProps> = ({
	defaultChecked,
	label,
	small,
	required,
	indeterminate,
	disabled,
}: CheckboxFieldProps) => (
	<CheckboxField
		defaultChecked={defaultChecked}
		label={label}
		small={small}
		required={required}
		indeterminate={indeterminate}
		disabled={disabled}
	/>
);

export const Unchecked = template.bind({});
Unchecked.args = {};

export const Checked = template.bind({});
Checked.args = { defaultChecked: true };

export const Indeterminate = template.bind({});
Indeterminate.args = { indeterminate: true };

export const Required = template.bind({});
Required.args = { required: true };

export const DisabledUnchecked = template.bind({});
DisabledUnchecked.args = { disabled: true };

export const DisabledChecked = template.bind({});
DisabledChecked.args = { disabled: true, defaultChecked: true };

export const DisabledIndeterminate = template.bind({});
DisabledIndeterminate.args = { disabled: true, indeterminate: true };

export const RequiredDisabled = template.bind({});
RequiredDisabled.args = { disabled: true, required: true };
