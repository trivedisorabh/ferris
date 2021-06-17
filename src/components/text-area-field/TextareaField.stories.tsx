import React, { ReactElement } from 'react';
import TextAreaField, { TextAreaFieldProps } from './TextAreaField';

export default {
	title: 'Form/TextAreaField',
	component: TextAreaField,
};

interface Story<T> {
	(args: T): ReactElement;
	args?: Partial<T>;
	argTypes?: Record<string, unknown>;
}

const Template: Story<TextAreaFieldProps> = ({
	description,
	id,
	label,
	disabled,
	required,
	value,
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
