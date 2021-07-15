import React from 'react';
import Heading, { HeadingLevel, HeadingProps } from '~atoms/heading/Heading';
import { Story } from '~common/interfaces';

export default {
	title: 'Atoms/Heading',
	component: Heading,
};

const Template: Story<HeadingProps> = ({ as, children, styledAs, ...rest }: HeadingProps) => (
	<Heading {...rest} as={as} styledAs={styledAs}>
		{children}
	</Heading>
);

export const DefaultH1 = Template.bind({});
DefaultH1.args = {
	as: HeadingLevel.h1,
	children: 'SKF Heading Element Level 1',
};

export const DefaultH2 = Template.bind({});
DefaultH2.args = {
	as: HeadingLevel.h2,
	children: 'SKF Heading Element Level 2',
};

export const DefaultH3 = Template.bind({});
DefaultH3.args = {
	as: HeadingLevel.h3,
	children: 'SKF Heading Element Level 3',
};

export const DefaultH4 = Template.bind({});
DefaultH4.args = {
	as: HeadingLevel.h4,
	children: 'SKF Heading Element Level 4',
};

export const CustomStyling = () => (
	<>
		<Heading as={HeadingLevel.h1} styledAs={HeadingLevel.h2}>
			An H1 styled as an H2
		</Heading>
		<Heading as={HeadingLevel.h2} styledAs={HeadingLevel.h3}>
			An H2 styled as an H3
		</Heading>
		<Heading as={HeadingLevel.h3} styledAs={HeadingLevel.h4}>
			An H3 styled as an H4
		</Heading>
		<Heading as={HeadingLevel.h4} styledAs={HeadingLevel.h1}>
			An H4 styled as an H1
		</Heading>
	</>
);
