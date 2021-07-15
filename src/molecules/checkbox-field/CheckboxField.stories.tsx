import React, { ReactElement } from 'react';
import CheckboxField, { CheckboxFieldProps } from './CheckboxField';

export default {
	title: 'Molecules/Checkbox',
	component: CheckboxField,
};

interface Story<T> {
	(args: T): ReactElement;
	args?: Partial<T>;
	argTypes?: Record<string, unknown>;
}

const Template: Story<CheckboxFieldProps> = ({
	change,
	checked = true,
	disabled = false,
	id,
	label = '',
	small = false,
}: CheckboxFieldProps) => (
	<CheckboxField
		change={change}
		checked={checked}
		disabled={disabled}
		id={id}
		label={label}
		small={small}
	/>
);

export const Default = Template.bind({});
Default.args = {
	id: 'default-checkbox',
	change: () => {
		// Do stuff
	},
};

export const Label = Template.bind({});
Label.args = {
	id: 'default-checkbox',
	change: () => {
		// Do stuff
	},
	label: 'Label',
};

export const Disabled = Template.bind({});
Disabled.args = {
	id: 'disabled-checkbox',
	change: () => {
		// Do stuff
	},
	disabled: true,
};

export const Small = Template.bind({});
Small.args = {
	id: 'small-checkbox',
	change: () => {
		// Do stuff
	},
	small: true,
};
