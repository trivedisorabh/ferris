import React from 'react';
import { Story } from '~common/interfaces';
import Loader, { LoaderProps } from '~components/loader/Loader';

export default {
	title: 'Components/Loader',
	component: Loader,
};

const Template: Story<LoaderProps> = ({ small }: LoaderProps) => <Loader small={small} />;

export const Default = Template.bind({});
Default.args = {};

export const Small = Template.bind({});
Small.args = {
	small: true,
};
