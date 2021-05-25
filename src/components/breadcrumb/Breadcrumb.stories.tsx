import React, { ReactElement } from 'react';
import Breadcrumb, { BreadcrumbProps } from './Breadcrumb';

export default {
	title: 'Navigation/Breadcrumbs',
	component: 'skf-breadcrumbs',
	includeStories: /^[A-Z]/,
};

interface Story<T> {
	(args: T): ReactElement;
	args?: Partial<T>;
	argTypes?: Record<string, unknown>;
}

const breadcrumbTpl: Story<BreadcrumbProps> = ({ items }: BreadcrumbProps) => (
	<Breadcrumb items={items} />
);

export const Interactive = breadcrumbTpl.bind({});
Interactive.args = {
	items: [
		{ label: 'Folder One', href: 'https://www.skf.com' },
		{ label: 'Folder Two', href: 'https://www.skf.com' },
		{ label: 'Folder Three', href: 'https://www.skf.com' },
		{ label: 'Folder Four', href: 'https://www.skf.com' },
	],
};
