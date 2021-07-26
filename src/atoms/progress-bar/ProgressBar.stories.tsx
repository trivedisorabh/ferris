import React from 'react';
import ProgressBar, { ProgressBarProps } from '~atoms/progress-bar/ProgressBar';
import { Story } from '~common/interfaces';

export default {
	title: 'Atoms/Progress bar',
	component: ProgressBar,
};

const Template: Story<ProgressBarProps> = ({ value, animated }: ProgressBarProps) => (
	<ProgressBar value={value} animated={animated} />
);

export const Default = Template.bind({});
Default.args = {
	value: 50,
};

export const Animated = Template.bind({});
Animated.args = {
	value: 50,
	animated: true,
};
