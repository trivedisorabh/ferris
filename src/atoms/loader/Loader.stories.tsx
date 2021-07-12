import React from 'react';
import Loader, { LoaderProps } from '~atoms/loader/Loader';
import { Story } from '~common/interfaces';

export default {
	title: 'Atoms/Loader',
	component: Loader,
};

const Template: Story<LoaderProps> = ({ small }: LoaderProps) => <Loader small={small} />;

export const Default = Template.bind({});
Default.args = {};

export const Small = Template.bind({});
Small.args = {
	small: true,
};
