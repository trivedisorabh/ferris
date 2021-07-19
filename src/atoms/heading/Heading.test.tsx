import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import React from 'react';
import Heading, { HeadingLevel } from './Heading';

describe('Heading', () => {
	const headings: Array<HeadingLevel> = ['h1', 'h2', 'h3', 'h4'];

	test('The heading renders the correct html element', () => {
		headings.forEach((level, index) => {
			const { getByRole } = render(<Heading as={level}>I am heading</Heading>);
			expect(getByRole('heading', { level: index + 1 })).toBeInTheDocument();
		});
	});

	test('The heading contains children', () => {
		const { findByText } = render(<Heading as={'h1'}>I am heading</Heading>);

		expect(findByText('I am heading')).toBeTruthy;
	});

	test('It passes automatic accesibility tests', async () => {
		const { container } = render(<Heading as={'h1'}>I am heading</Heading>);

		expect(await axe(container)).toHaveNoViolations();
	});
});
