import React, { ReactElement } from 'react';
import Checkbox, { CheckboxProps } from './Checkbox';

export default {
	title: 'Atoms/Checkbox',
	component: Checkbox,
};

interface Story<T> {
	(args: T): ReactElement;
	args?: Partial<T>;
	argTypes?: Record<string, unknown>;
}

const Template: Story<CheckboxProps> = ({
	defaultChecked = true,
	disabled = false,
	id,
	small,
}: CheckboxProps) => (
	<Checkbox id={id} disabled={disabled} defaultChecked={defaultChecked} small={small} />
);

export const Default = Template.bind({});
Default.args = {
	id: 'default-checkbox',
};

export const Disabled = Template.bind({});
Disabled.args = {
	id: 'default-checkbox',
	disabled: true,
};

export const Small = Template.bind({});
Small.args = {
	id: 'default-checkbox',
	small: true,
};
