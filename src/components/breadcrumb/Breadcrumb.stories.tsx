import React, { ReactElement } from 'react';
import Breadcrumb, { BreadcrumbProps } from './Breadcrumb';

export default {
	title: 'Navigation/Breadcrumb',
	component: Breadcrumb,
	argTypes: {
		ariaCurrentLabel: {
			control: { type: 'select', options: ['location', 'page'] },
		},
	},
};

interface Story<T> {
	(args: T): ReactElement;
	args?: Partial<T>;
	argTypes?: Record<string, unknown>;
}

const breadcrumbTpl: Story<BreadcrumbProps> = ({
	ariaCurrentLabel,
	items,
	isSmall,
}: BreadcrumbProps) => (
	<Breadcrumb ariaCurrentLabel={ariaCurrentLabel} items={items} isSmall={isSmall} />
);

export const Default = breadcrumbTpl.bind({});
Default.args = {
	ariaCurrentLabel: 'location',
	items: [
		{ label: 'Folder One', href: 'https://www.skf.com' },
		{ label: 'Folder Two', href: 'https://www.skf.com' },
		{ label: 'Folder Three', href: 'https://www.skf.com' },
		{ label: 'Folder Four', href: 'https://www.skf.com' },
	],
};
