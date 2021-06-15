import React, { ReactElement } from 'react';
import TextField, { TextFieldProps } from './TextField';

export default {
	title: 'Form/TextField',
	component: 'skf-text-field',
	argTypes: {
		description: { control: 'text' },
		disabled: { control: 'boolean' },
		id: { control: 'text' },
		label: { control: 'text' },
		required: { control: 'boolean' },
		value: { control: 'text' },
	},
};

interface Story<T> {
	(args: T): ReactElement;
	args?: Partial<T>;
	argTypes?: Record<string, unknown>;
}

const TextFieldTpl: Story<TextFieldProps> = ({
	description,
	id,
	isDisabled,
	isRequired,
	label,
	type,
	value,
}: TextFieldProps) => (
	<TextField
		description={description}
		id={id}
		isDisabled={isDisabled}
		isRequired={isRequired}
		label={label}
		type={type}
		value={value}
	/>
);

export const Default = TextFieldTpl.bind({});
Default.args = {
	id: 'test-id',
	label: 'Label of optional field',
	type: 'text',
	value: 'value',
};

export const DefaultDisabled = TextFieldTpl.bind({});
DefaultDisabled.args = {
	isDisabled: true,
	label: 'Label of optional field',
};

export const DefaultRequired = TextFieldTpl.bind({});
DefaultRequired.args = {
	isRequired: true,
	label: 'Label of optional field',
};

export const DefaultRequiredDisabled = TextFieldTpl.bind({});
DefaultRequiredDisabled.args = {
	isDisabled: true,
	isRequired: true,
	label: 'Label of optional field',
};

export const WithDescription = TextFieldTpl.bind({});
WithDescription.args = {
	description: 'A text that tell the user what to input',
	label: 'Label of optional field',
};

export const WithDescriptionDisabled = TextFieldTpl.bind({});
WithDescriptionDisabled.args = {
	description: 'A text that tell the user what to input',
	isDisabled: true,
	label: 'Label of optional field',
};

export const WithDescriptionRequired = TextFieldTpl.bind({});
WithDescriptionRequired.args = {
	description: 'A text that tell the user what to input',
	isRequired: true,
	label: 'Label of optional field',
};

export const WithDescriptionRequiredDisabled = TextFieldTpl.bind({});
WithDescriptionRequiredDisabled.args = {
	description: 'A text that tell the user what to input',
	isDisabled: true,
	isRequired: true,
	label: 'Label of optional field',
};
