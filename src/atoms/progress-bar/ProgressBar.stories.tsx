import React, { ReactElement } from 'react';
import ProgressBar, { ProgressBarProps } from '~atoms/progress-bar/ProgressBar';

export default {
	title: 'Atoms/ProgressBar',
	component: ProgressBar,
};

interface Story<T> {
	(args: T): ReactElement;
	args?: Partial<T>;
	argTypes?: Record<string, unknown>;
}

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
