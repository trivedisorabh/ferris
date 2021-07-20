import React, { useState } from 'react';
import { Story } from '~common/interfaces';
import Checkbox, { CheckboxProps } from './Checkbox';

export default {
	title: 'Atoms/Checkbox/Regular',
	component: Checkbox,
	argTypes: {
		small: { defaultValue: false },
		disabled: { control: 'boolean' },
		indeterminate: { control: 'boolean' },
		onChange: { action: 'Changed', table: { disable: true } },
		defaultChecked: { table: { disable: true } },
	},
	includeStories: /^[A-Z]/,
};

export const template: Story<CheckboxProps> = ({
	defaultChecked,
	disabled,
	small,
	onChange,
	indeterminate,
}: CheckboxProps) => (
	<Checkbox
		disabled={disabled}
		defaultChecked={defaultChecked}
		small={small}
		onChange={onChange}
		indeterminate={indeterminate}
	/>
);

export const Checked = template.bind({});
Checked.args = { defaultChecked: true };

export const Unchecked = template.bind({});
Unchecked.args = {};

export const Indeterminate = template.bind({});
Indeterminate.args = { indeterminate: true };

export const CheckedDisabled = template.bind({});
CheckedDisabled.args = { defaultChecked: true, disabled: true };

export const UncheckedDisabled = template.bind({});
UncheckedDisabled.args = { disabled: true };

export const IndeterminateDisabled = template.bind({});
IndeterminateDisabled.args = { indeterminate: true, disabled: true };

export const Controlled = ({ disabled, small, indeterminate }: CheckboxProps) => {
	const [checked, setChecked] = useState(true);
	return (
		<Checkbox
			id={'controlled-checkbox'}
			checked={checked}
			disabled={disabled}
			small={small}
			indeterminate={indeterminate}
			onChange={() => setChecked(!checked)}
		/>
	);
};
