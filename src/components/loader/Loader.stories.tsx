import React, { ReactElement } from 'react';
import Loader, { LoaderProps } from '~components/loader/Loader';

export default {
	title: 'Progress/Loader',
	component: Loader,
};

interface Story<T> {
	(args: T): ReactElement;
	args?: Partial<T>;
	argTypes?: Record<string, unknown>;
}

const Template: Story<LoaderProps> = ({ small }: LoaderProps) => <Loader small={small} />;

export const Default = Template.bind({});
Default.args = {};

export const Small = Template.bind({});
Small.args = {
	small: true,
};
