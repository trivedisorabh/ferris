import React from 'react';
import { Story } from '~common/interfaces';
import CheckboxField, { CheckboxFieldProps } from './CheckboxField';

export default {
	title: 'Molecules/Checkbox field/Regular',
	component: CheckboxField,
	argTypes: {
		small: { control: 'boolean', defaultValue: false },
		label: { control: 'string', defaultValue: 'Checkbox label' },
	},
	includeStories: /^[A-Z]/,
};

export const template: Story<CheckboxFieldProps> = ({
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
