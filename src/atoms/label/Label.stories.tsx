import React, { ReactElement } from 'react';
import Label, { LabelProps } from '~atoms/label/Label';

export default {
	title: 'Atoms/Label',
	component: Label,
};

interface Story<T> {
	(args: T): ReactElement;
	args?: Partial<T>;
	argTypes?: Record<string, unknown>;
}

const Template: Story<LabelProps> = ({ children, id, required, ...rest }: LabelProps) => (
	<Label {...rest} id={id} required={required}>
		{children}
	</Label>
);

export const Default = Template.bind({});
Default.args = {
	children: 'Lorem ipsum',
	id: 'label-01',
};

export const Required = Template.bind({});
Required.args = {
	children: 'Lorem ipsum',
	id: 'label-02',
	required: true,
};
