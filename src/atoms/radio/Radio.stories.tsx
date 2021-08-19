import React, { useState } from 'react';
import { Story } from '~common/interfaces';
import Radio, { RadioProps } from './Radio';

export default {
	title: 'Atoms/Radio/Regular',
	component: Radio,
	argTypes: {
		small: {
			defaultValue: false,
			description: 'If true, renders a smaller version of the component.',
		},
		disabled: {
			control: 'boolean',
			description: 'If true, makes the component unclickable and appear faded.',
		},
		onChange: {
			control: false,
			description: 'Callback that will fire every time the component changes state',
		},
		defaultChecked: {
			control: false,
			description: 'If the component is uncontrolled, determines the inital state of the radio',
		},
		checked: {
			control: false,
			description:
				'If set the component will be [controlled](https://reactjs.org/docs/forms.html#controlled-components)',
		},
	},
	includeStories: /^[A-Z]/,
};

const template: Story<RadioProps> = ({ defaultChecked, disabled, small, onChange }: RadioProps) => (
	<Radio
		defaultChecked={defaultChecked}
		disabled={disabled}
		id={'uncontrolled-radio'}
		onChange={onChange}
		small={small}
	/>
);

export const Default = template.bind({});
Default.args = {};

export const Checked = template.bind({});
Checked.args = { defaultChecked: true };

export const Disabled = template.bind({});
Disabled.args = { disabled: true };

export const DisabledSelected = template.bind({});
DisabledSelected.args = { defaultChecked: true, disabled: true };

export const Small = template.bind({});
Small.args = { small: true };

export const Controlled = ({ disabled, small }: RadioProps) => {
	const [checked, setChecked] = useState(false);
	return (
		<Radio
			checked={checked}
			disabled={disabled}
			id={'controlled-radio'}
			onChange={() => setChecked(!checked)}
			small={small}
		/>
	);
};
