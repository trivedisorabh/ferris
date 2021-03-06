import React from 'react';
import { Story } from '~common/interfaces';
import Colors from '~tokens/colors/Colors';
import IconSizes from '~tokens/icon-sizes/IconSizes';
import Icons from '~tokens/icons/Icons';
import Icon, { IconProps } from './Icon';

export default {
	title: 'Atoms/Icon',
	component: Icon,
	argTypes: {
		color: {
			defaultValue: Colors.blackBrand,
			control: { type: 'select', options: Colors },
		},
		icon: {
			defaultValue: Object.keys(Icons)[0],
			control: { type: 'select', options: Object.keys(Icons) },
			mapping: Icons,
		},
		size: {
			defaultValue: IconSizes.md,
			control: { type: 'radio', options: IconSizes },
		},
	},
};

const Template: Story<IconProps> = ({ icon, color, size }: IconProps) => (
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
