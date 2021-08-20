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
	label = 'Number field',
	onChange,
	placeholder,
	step,
}: NumberFieldProps) => (
	<NumberField
		decrementLabel="Decrement"
		defaultValue={defaultValue}
		disabled={disabled}
		id={id}
		incrementLabel="Increment"
		label={label}
		onChange={onChange}
		placeholder={placeholder}
		step={step}
	/>
);

export const Default = Template.bind({});
Default.args = {};

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
	defaultValue: 'Default value',
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
	placeholder: 'Input number...',
};

export const LabelHidden = Template.bind({});
LabelHidden.args = {};

export const Step = Template.bind({});
Step.args = { step: 0.5 };

export const Controlled = () => {
	const [value, setValue] = useState('');
	return (
		<NumberField
			decrementLabel="Decrement"
			id="controlled-checkbox"
			incrementLabel="Increment"
			label="Number field"
			onChange={(event) => setValue(event.target.value)}
			value={value}
		/>
	);
};
