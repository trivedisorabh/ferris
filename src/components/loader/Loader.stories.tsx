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

const Template: Story<LoaderProps> = ({ isSmall }: LoaderProps) => <Loader isSmall={isSmall} />;

export const Default = Template.bind({});
Default.args = {};

export const Small = Template.bind({});
Small.args = {
	isSmall: true,
};