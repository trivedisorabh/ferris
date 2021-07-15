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
	checked = true,
	disabled = false,
	id,
	label = '',
	small = false,
}: InputCheckboxFieldProps) => (
	<InputCheckboxField
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
	change: (e) => {
		const check = e?.currentTarget as HTMLInputElement;
		alert(check.checked ? 'Checkbox is checked.' : 'Checkbox is NOT checked');
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
