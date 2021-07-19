import React, { useState } from 'react';
import { Story } from '~common/interfaces';
import Checkbox, { CheckboxProps } from './Checkbox';

export default {
	title: 'Atoms/Checkbox/Regular',
	component: Checkbox,
};

const Template: Story<CheckboxProps> = ({ defaultChecked, disabled }: CheckboxProps) => (
	<Checkbox disabled={disabled} defaultChecked={defaultChecked} />
);

export const Checked = Template.bind({});
Checked.args = { defaultChecked: true };

export const Unchecked = Template.bind({});
Unchecked.args = {};

export const CheckedDisabled = Template.bind({});
CheckedDisabled.args = { defaultChecked: true, disabled: true };

export const UncheckedDisabled = Template.bind({});
UncheckedDisabled.args = { disabled: true };

export const Controlled = () => {
	const [checked, setChecked] = useState(true);
	return (
		<Checkbox id={'controlled-checkbox'} checked={checked} onChange={() => setChecked(!checked)} />
	);
};
