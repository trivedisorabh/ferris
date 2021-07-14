import React, { ReactElement } from 'react';
import InputCheckboxField, { InputCheckboxFieldProps } from './InputCheckboxField';

export default {
	title: 'Molecules/Checkbox',
	component: InputCheckboxField,
};

interface Story<T> {
	(args: T): ReactElement;
	args?: Partial<T>;
	argTypes?: Record<string, unknown>;
}

const Template: Story<InputCheckboxFieldProps> = ({
	change,
	checked = false,
	disabled = false,
	id,
	label = '',
}: InputCheckboxFieldProps) => (
	<InputCheckboxField change={change} checked={checked} disabled={disabled} id={id} label={label} />
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

export const Checked = Template.bind({});
Checked.args = {
	id: 'checked-checkbox',
	change: () => {
		// Do stuff
	},
	checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
	id: 'checked-checkbox',
	change: () => {
		// Do stuff
	},
	disabled: true,
};
