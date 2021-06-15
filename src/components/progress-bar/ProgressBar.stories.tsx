import React, { ReactElement } from 'react';
import ProgressBar, { ProgressBarProps } from '~components/progress-bar/ProgressBar';

export default {
	title: 'Progress/ProgressBar',
	component: ProgressBar,
};

interface Story<T> {
	(args: T): ReactElement;
	args?: Partial<T>;
	argTypes?: Record<string, unknown>;
}

const Template: Story<ProgressBarProps> = ({ value, isAnimated }: ProgressBarProps) => (
	<ProgressBar value={value} isAnimated={isAnimated} />
);

export const Default = Template.bind({});
Default.args = {
	value: 50,
};

export const Animated = Template.bind({});
Animated.args = {
	value: 50,
	isAnimated: true,
};
