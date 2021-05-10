import { html, TemplateResult } from 'lit-html';
import { TextField } from './text-field.js';
import './text-field.register.js';

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
	(args: T): TemplateResult;
	args?: Partial<T>;
	argTypes?: Record<string, unknown>;
}

const Template: Story<TextField> = ({ description, disabled, id, label, required, type, value }) =>
	html`
		<skf-text-field
			description=${description || ''}
			?disabled=${disabled}
			id=${id}
			label=${label}
			?required=${required}
			type="${type}"
			value=${value}
		>
		</skf-text-field>
	`;

export const Default = Template.bind({});
Default.args = {
	id: 'test-id',
	label: 'Label of optional field',
	type: 'text',
	value: 'value',
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
