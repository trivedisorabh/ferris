import React, { useState } from 'react';
import { Story } from '~common/interfaces';
import NumberField, { NumberFieldProps } from './NumberField';

export default {
	title: 'Molecules/Number field',
	component: NumberField,
	argTypes: {
		required: {
			control: false,
		},
	},
};

const Template: Story<NumberFieldProps> = ({
	defaultValue,
	disabled,
	id = 'number-field',
	label,
	onChange,
	placeholder,
}: NumberFieldProps) => (
	<NumberField
		defaultValue={defaultValue}
		disabled={disabled}
		id={id}
		label={label}
		onChange={onChange}
		placeholder={placeholder}
		resetLabel="Clear"
	/>
);

export const Default = Template.bind({});
Default.args = {
	label: 'Search label',
};

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
	defaultValue: 'Default value',
	label: 'Search label',
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
	label: 'Search label',
	placeholder: 'Search...',
};

export const LabelHidden = Template.bind({});
LabelHidden.args = {
	label: 'Search label',
};

export const Controlled = () => {
	const [value, setValue] = useState('');
	return (
		<NumberField
			id="controlled-checkbox"
			label="Search label"
			onChange={(event) => setValue(event.target.value)}
			onReset={() => {
				setValue('');
			}}
			resetLabel="Reset"
			value={value}
		/>
	);
};
