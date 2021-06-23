import React, { ReactElement } from 'react';
import Icons from '~tokens/icons/Icons';
import Icon, { IconProps } from './Icon';

export default {
	title: 'Layout/Icon',
	component: Icon,
};

interface Story<T> {
	(args: T): ReactElement;
	args?: Partial<T>;
	argTypes?: Record<string, unknown>;
}

const Template: Story<IconProps> = ({ icon = Icons.Check, color, size }: IconProps) => (
	<Icon icon={icon} color={color} size={size} />
);

export const Default = Template.bind({});
Default.args = {};
