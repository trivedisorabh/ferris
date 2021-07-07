import React from 'react';
import InputText, { InputTextProps } from '~atoms/input-text/InputText';
import { Story } from '~common/interfaces';

export default {
	title: 'Atoms/InputText',
	component: InputText,
};

const Template: Story<InputTextProps> = ({ id, type, value, ...rest }: InputTextProps) => (
	<InputText {...rest} id={id} type={type} value={value} />
);

export const Default = Template.bind({});
Default.args = {
	id: 'input-text-01',
	placeholder: 'Input text here',
	type: 'text',
};
