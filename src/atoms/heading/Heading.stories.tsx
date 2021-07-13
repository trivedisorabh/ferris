import React from 'react';
import Heading, { HeadingProps } from '~atoms/heading/Heading';
import { Story } from '~common/interfaces';
import FontSizes from '~tokens/font-sizes/FontSizes';
import FontWeights from '~tokens/font-weights/FontWeights';

export default {
	title: 'Atoms/Heading',
	component: Heading,
};

const Template: Story<HeadingProps> = ({ as, children, headingStyle, ...rest }: HeadingProps) => (
	<Heading {...rest} as={as} headingStyle={headingStyle}>
		{children}
	</Heading>
);

export const DefaultH1 = Template.bind({});
DefaultH1.args = {
	as: 'h1',
	children: 'SKF Heading Element Level 1',
};

export const DefaultH2 = Template.bind({});
DefaultH2.args = {
	as: 'h2',
	children: 'SKF Heading Element Level 2',
};

export const DefaultH3 = Template.bind({});
DefaultH3.args = {
	as: 'h3',
	children: 'SKF Heading Element Level 3',
};

export const DefaultH4 = Template.bind({});
DefaultH4.args = {
	as: 'h4',
	children: 'SKF Heading Element Level 4',
};

export const CustomStyling = Template.bind({});
CustomStyling.args = {
	as: 'h1',
	children: 'SKF Heading With custom styling',
	headingStyle: { fontSize: FontSizes.xxxxl, fontWeight: FontWeights.bold },
};
