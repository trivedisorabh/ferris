import React from 'react';
import TextArea, { TextAreaProps } from '~atoms/text-area/TextArea';
import { Story } from '~common/interfaces';

export default {
	title: 'Atoms/TextArea',
	component: TextArea,
};

const Template: Story<TextAreaProps> = ({ id, value, ...rest }: TextAreaProps) => (
	<TextArea {...rest} id={id} value={value} />
);

export const Default = Template.bind({});
Default.args = {
	id: 'text-area-01',
	value: '',
};
