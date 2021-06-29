import React, { ReactElement } from 'react';
import Colors from '~tokens/colors/Colors';
import IconSizes from '~tokens/icon-sizes/IconSizes';
import Icons from '~tokens/icons/Icons';
import Icon, { IconProps } from './Icon';

export default {
	title: 'Components/Icon',
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

export const Colored = Template.bind({});
Colored.args = {
	color: Colors.redBase,
};

export const Large = Template.bind({});
Large.args = {
	size: IconSizes.lg,
};
