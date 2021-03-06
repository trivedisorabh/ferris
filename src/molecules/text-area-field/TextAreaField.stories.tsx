import React from 'react';
import { Story } from '~common/interfaces';
import TextAreaField, { TextAreaFieldProps } from './TextAreaField';

export default {
	title: 'Molecules/Text area field',
	component: TextAreaField,
};

const Template: Story<TextAreaFieldProps> = ({
	id,
	label,
	value,
	description,
	disabled,
	required,
}: TextAreaFieldProps) => (
	<TextAreaField
		description={description}
		disabled={disabled}
		id={id}
		label={label}
		required={required}
		value={value}
	/>
);

export const Default = Template.bind({});
Default.args = {
	id: 'test-id',
	label: 'Label of optional field',
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
