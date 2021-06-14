import React, { ReactElement } from 'react';
import Spacer, { SpacerProps } from './Spacer';

export default {
	title: 'Layout/Spacer',
	component: Spacer,
};

interface Story<T> {
	(args: T): ReactElement;
	args?: Partial<T>;
	argTypes?: Record<string, unknown>;
}

const Template: Story<SpacerProps> = ({ orientation, spacing }: SpacerProps) => (
	<Spacer orientation={orientation} spacing={spacing} />
);

export const Default = Template.bind({});
Default.args = {};
