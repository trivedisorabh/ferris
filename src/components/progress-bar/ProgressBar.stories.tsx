import React from 'react';
import { Story } from '~common/interfaces';
import ProgressBar, { ProgressBarProps } from '~components/progress-bar/ProgressBar';

export default {
	title: 'Components/ProgressBar',
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
