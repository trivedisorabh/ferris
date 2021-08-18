import React, { useState } from 'react';
import TextArea, { TextAreaProps } from '~atoms/text-area/TextArea';
import { Story } from '~common/interfaces';

export default {
	title: 'Atoms/TextArea',
	component: TextArea,
	argTypes: {
		onChange: {
			control: false,
		},
	},
};

const Template: Story<TextAreaProps> = ({ id, onChange, value }: TextAreaProps) => (
	<TextArea id={id} onChange={onChange} value={value} defaultValue={'defaultValue'}></TextArea>
);

export const Default = Template.bind({});

export const Controlled = () => {
	const [value, setValue] = useState('Initial value');
	return (
		<TextArea
			id={'id'}
			onChange={(event) => {
				setValue(event.target.value);
			}}
			value={value}
		></TextArea>
	);
};
