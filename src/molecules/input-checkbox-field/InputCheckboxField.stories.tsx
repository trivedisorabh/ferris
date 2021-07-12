import React, { ReactElement } from 'react';
import InputCheckboxField, { InputCheckboxFieldProps } from './InputCheckboxField';

export default {
	title: 'Molecules/InputCheckboxField',
	component: InputCheckboxField,
};

interface Story<T> {
	(args: T): ReactElement;
	args?: Partial<T>;
	argTypes?: Record<string, unknown>;
}

const Template: Story<InputCheckboxFieldProps> = ({ id, label }: InputCheckboxFieldProps) => (
	<InputCheckboxField id={id} label={label} />
);

export const Default = Template.bind({});
Default.args = {
	id: 'test-id',
	label: 'Test',
};
