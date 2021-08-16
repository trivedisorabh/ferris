import React from 'react';
import Paragraph, { ParagraphProps } from '~atoms/paragraph/Paragraph';
import { Story } from '~common/interfaces';

const size: ParagraphProps['size'][] = ['small', 'medium', 'large'];

export default {
	title: 'Atoms/Paragraph',
	component: Paragraph,
	argTypes: {
		size: {
			defaultValue: 'medium',
			control: { type: 'select', size },
		},
	},
};

const Template: Story<ParagraphProps> = ({ size }: ParagraphProps) => (
	<Paragraph size={size}>
		Expedita quo velit eveniet ipsa sit molestiae aspernatur. Occaecati maxime ut sed sit omnis.
		Nesciunt nisi nulla molestias.
	</Paragraph>
);

export const Default = Template.bind({});
Default.args = {
	size: 'medium',
};

export const Small = Template.bind({});
Small.args = {
	size: 'small',
};

export const Large = Template.bind({});
Large.args = {
	size: 'large',
};
