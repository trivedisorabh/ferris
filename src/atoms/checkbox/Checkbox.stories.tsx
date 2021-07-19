import React, { useState } from 'react';
import { Story } from '~common/interfaces';
import Checkbox, { CheckboxProps } from './Checkbox';

export const checkboxCommonArgTypes = {
	small: { defaultValue: false },
};
export default {
	title: 'Atoms/Checkbox/Regular',
	component: Checkbox,
	argTypes: checkboxCommonArgTypes,
	includeStories: /^[A-Z]/,
};

export const template: Story<CheckboxProps> = ({
	defaultChecked,
	disabled,
	small,
}: CheckboxProps) => <Checkbox disabled={disabled} defaultChecked={defaultChecked} small={small} />;

export const Checked = template.bind({});
Checked.args = { defaultChecked: true };

export const Unchecked = template.bind({});
Unchecked.args = {};

export const CheckedDisabled = template.bind({});
CheckedDisabled.args = { defaultChecked: true, disabled: true };

export const UncheckedDisabled = template.bind({});
UncheckedDisabled.args = { disabled: true };

export const Controlled = () => {
	const [checked, setChecked] = useState(true);
	return (
		<Checkbox id={'controlled-checkbox'} checked={checked} onChange={() => setChecked(!checked)} />
	);
};
