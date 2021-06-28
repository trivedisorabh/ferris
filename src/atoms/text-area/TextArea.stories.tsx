import React, { ReactElement } from 'react';
import TextArea, { TextAreaProps } from '~atoms/text-area/TextArea';

export default {
	title: 'Atoms/TextArea',
	component: TextArea,
};

interface Story<T> {
	(args: T): ReactElement;
	args?: Partial<T>;
	argTypes?: Record<string, unknown>;
}

const Template: Story<TextAreaProps> = ({ id, ...rest }: TextAreaProps) => (
	<TextArea {...rest} id={id} value={rest.value} />
);

export const Default = Template.bind({});
Default.args = {
	id: 'text-area-01',
	value:
		'Est id deserunt non eos expedita illum ipsum eveniet. Officia animi officiis consequatur. Ut iusto aut fuga pariatur optio et sunt rerum.',
};
