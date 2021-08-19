import React from 'react';
import { Story } from '~common/interfaces';
import RadioField, { RadioFieldProps } from './RadioField';

export default {
	title: 'Molecules/Radio field',
	component: RadioField,
	argTypes: {
		small: {
			defaultValue: false,
			description: 'If true, renders a smaller version of the component.',
		},
		label: {
			defaultValue: 'Radio label',
			description: 'Label text describing the radio',
		},
		defaultChecked: {
			control: false,
			description: 'If the component is uncontrolled, determines the inital state of the radio',
		},
		required: {
			description: 'If true, marks the label with a red asterisk.',
		},
		disabled: {
			control: 'boolean',
			description: 'If true, makes the component unclickable and appear faded.',
		},
		onChange: {
			control: false,
			description: 'Callback that will fire every time the component changes state',
		},
		checked: {
			control: false,
			description:
				'If set the component will be [controlled](https://reactjs.org/docs/forms.html#controlled-components)',
		},
		RadioProps: {
			control: false,
			description:
				'Props that will be passed on the the [radio](/?path=/docs/atoms-radio-regular--checked) atom',
		},
		labelProps: {
			control: false,
			description:
				'Props that will be passed on the the [label](/?path=/docs/atoms-label-regular--regular) atom',
		},
	},
	includeStories: /^[A-Z]/,
};

const template: Story<RadioFieldProps> = ({
	defaultChecked,
	disabled,
	id,
	label,
	required,
	small,
}: RadioFieldProps) => (
	<RadioField
		defaultChecked={defaultChecked}
		disabled={disabled}
		id={id}
		label={label}
		required={required}
		small={small}
	/>
);

export const Default = template.bind({});
Default.args = {};

export const Selected = template.bind({});
Selected.args = { defaultChecked: true };

export const Required = template.bind({});
Required.args = { required: true };

export const RequiredDisabled = template.bind({});
RequiredDisabled.args = { disabled: true, required: true };

export const Disabled = template.bind({});
Disabled.args = { disabled: true };

export const DisabledSelected = template.bind({});
DisabledSelected.args = { disabled: true, defaultChecked: true };

export const Small = template.bind({});
Small.args = { small: true };
