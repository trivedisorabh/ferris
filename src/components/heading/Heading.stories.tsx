import React, { ReactElement } from 'react';
import Heading, { HeadingProps } from '~components/heading/Heading';

export default {
	title: 'Components/Heading',
	component: Heading,
};

interface Story<T> {
	(args: T): ReactElement;
	args?: Partial<T>;
	argTypes?: Record<string, unknown>;
}

const Template: Story<HeadingProps> = ({ as, children, ...rest }: HeadingProps) => (
	<Heading {...rest} as={as}>
		{children}
	</Heading>
);

export const H1 = Template.bind({});
H1.args = {
	as: 'h1',
	children: 'SKF Heading Element Level 1',
};

export const H2 = Template.bind({});
H2.args = {
	as: 'h2',
	children: 'SKF Heading Element Level 2',
};

export const H3 = Template.bind({});
H3.args = {
	as: 'h3',
	children: 'SKF Heading Element Level 3',
};

export const H4 = Template.bind({});
H4.args = {
	as: 'h4',
	children: 'SKF Heading Element Level 4',
};
