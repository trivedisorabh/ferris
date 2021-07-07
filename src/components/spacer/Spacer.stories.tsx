import React from 'react';
import { Story } from '~common/interfaces';
import Spacer, { SpacerProps } from './Spacer';

export default {
	title: 'Components/Spacer',
	component: Spacer,
};

const Template: Story<SpacerProps> = ({ orientation, spacing }: SpacerProps) => (
	<Spacer orientation={orientation} spacing={spacing} />
);

export const Default = Template.bind({});
Default.args = {};
