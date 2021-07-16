import React, { ReactElement } from 'react';
import CheckboxField, { CheckboxFieldProps } from './CheckboxField';

export default {
	title: 'Molecules/CheckboxField',
	component: CheckboxField,
};

interface Story<T> {
	(args: T): ReactElement;
	args?: Partial<T>;
	argTypes?: Record<string, unknown>;
}

const Template: Story<CheckboxFieldProps> = ({
	checked = true,
	id,
	label = 'Label',
	small,
}: CheckboxFieldProps) => <CheckboxField checked={checked} id={id} label={label} small={small} />;

export const Default = Template.bind({});
Default.args = {
	id: 'default-checkbox-field',
};

export const Small = Template.bind({});
Small.args = {
	id: 'small-checkbox-field',
	small: true,
};
