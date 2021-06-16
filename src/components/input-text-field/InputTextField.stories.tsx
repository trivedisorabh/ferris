import React, { ReactElement } from 'react';
import InputTextField, { InputTextFieldProps } from './InputTextField';

export default {
	title: 'Form/InputTextField',
	component: InputTextField,
};

interface Story<T> {
	(args: T): ReactElement;
	args?: Partial<T>;
	argTypes?: Record<string, unknown>;
}

const Template: Story<InputTextFieldProps> = ({
	description,
	id,
	label,
	type,
	value,
	isDisabled,
	isRequired,
}: InputTextFieldProps) => (
	<InputTextField
		description={description}
		id={id}
		label={label}
		type={type}
		value={value}
		isDisabled={isDisabled}
		isRequired={isRequired}
	/>
);

export const Default = Template.bind({});
Default.args = {
	id: 'test-id',
	label: 'Label of optional field',
	type: 'text',
	value: 'value',
};

export const DefaultDisabled = Template.bind({});
DefaultDisabled.args = {
	isDisabled: true,
	label: 'Label of optional field',
};

export const DefaultRequired = Template.bind({});
DefaultRequired.args = {
	isRequired: true,
	label: 'Label of optional field',
};

export const DefaultRequiredDisabled = Template.bind({});
DefaultRequiredDisabled.args = {
	isDisabled: true,
	isRequired: true,
	label: 'Label of optional field',
};

export const WithDescription = Template.bind({});
WithDescription.args = {
	description: 'A text that tell the user what to input',
	label: 'Label of optional field',
};

export const WithDescriptionDisabled = Template.bind({});
WithDescriptionDisabled.args = {
	description: 'A text that tell the user what to input',
	isDisabled: true,
	label: 'Label of optional field',
};

export const WithDescriptionRequired = Template.bind({});
WithDescriptionRequired.args = {
	description: 'A text that tell the user what to input',
	isRequired: true,
	label: 'Label of optional field',
};

export const WithDescriptionRequiredDisabled = Template.bind({});
WithDescriptionRequiredDisabled.args = {
	description: 'A text that tell the user what to input',
	isDisabled: true,
	isRequired: true,
	label: 'Label of optional field',
};
