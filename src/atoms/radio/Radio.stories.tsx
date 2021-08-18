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
			description: 'If the component is uncontrolled, determines the inital state of the Radio',
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
		id={'uncontrolled-Radio'}
		disabled={disabled}
		defaultChecked={defaultChecked}
		small={small}
		onChange={onChange}
	/>
);

export const Checked = template.bind({});
Checked.args = { defaultChecked: true };

export const Unchecked = template.bind({});
Unchecked.args = {};

export const CheckedDisabled = template.bind({});
CheckedDisabled.args = { defaultChecked: true, disabled: true };

export const UncheckedDisabled = template.bind({});
UncheckedDisabled.args = { disabled: true };

export const Controlled = ({ disabled, small }: RadioProps) => {
	const [checked, setChecked] = useState(true);
	return (
		<Radio
			id={'controlled-Radio'}
			checked={checked}
			disabled={disabled}
			small={small}
			onChange={() => setChecked(!checked)}
		/>
	);
};
