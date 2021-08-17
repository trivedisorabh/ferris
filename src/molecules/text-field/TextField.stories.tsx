import React from 'react';
import { Story } from '~common/interfaces';
import TextField, { TextFieldProps } from './TextField';

export default {
	title: 'Molecules/Text field',
	component: TextField,
};

const Template: Story<TextFieldProps> = ({
	description,
	id,
	label,
	type,
	disabled,
	required,
	value,
}: TextFieldProps) => (
	<TextField
		description={description}
		disabled={disabled}
		id={id}
		label={label}
		required={required}
		type={type}
		value={value}
	/>
);

export const Default = Template.bind({});
Default.args = {
	id: 'test-id',
	label: 'Label of optional field',
	type: 'text',
};

export const DefaultDisabled = Template.bind({});
DefaultDisabled.args = {
	disabled: true,
	label: 'Label of optional field',
};

export const DefaultRequired = Template.bind({});
DefaultRequired.args = {
	label: 'Label of optional field',
	required: true,
};

export const DefaultRequiredDisabled = Template.bind({});
DefaultRequiredDisabled.args = {
	disabled: true,
	label: 'Label of optional field',
	required: true,
};

export const WithDescription = Template.bind({});
WithDescription.args = {
	description: 'A text that tell the user what to input',
	label: 'Label of optional field',
};

export const WithDescriptionDisabled = Template.bind({});
WithDescriptionDisabled.args = {
	description: 'A text that tell the user what to input',
	disabled: true,
	label: 'Label of optional field',
};

export const WithDescriptionRequired = Template.bind({});
WithDescriptionRequired.args = {
	description: 'A text that tell the user what to input',
	label: 'Label of optional field',
	required: true,
};

export const WithDescriptionRequiredDisabled = Template.bind({});
WithDescriptionRequiredDisabled.args = {
	description: 'A text that tell the user what to input',
	disabled: true,
	label: 'Label of optional field',
	required: true,
};
