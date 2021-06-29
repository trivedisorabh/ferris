import { render } from '@testing-library/react';
import React from 'react';
import Heading, { HeadingLevel } from './Heading';

describe('Heading', () => {
	const headings: Array<HeadingLevel> = ['h1', 'h2', 'h3', 'h4'];

	test('The heading renders the correct html element', () => {
		headings.forEach((level) => {
			const { container } = render(<Heading as={level}>I am heading</Heading>);
			expect(container.querySelector(level)).toBeTruthy();
		});
	});

	test('The heading contains children', () => {
		const { container } = render(<Heading as="h1">I am heading</Heading>);

		expect(container.querySelector('h1')?.innerHTML).toBe('I am heading');
	});
});
