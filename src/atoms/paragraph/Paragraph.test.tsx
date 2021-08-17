import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import React from 'react';
import Paragraph from './Paragraph';

describe('Paragraph', () => {
	test('The paragraph contains children', () => {
		const { findByText } = render(<Paragraph>I am paragraph</Paragraph>);

		expect(findByText('I am paragraph')).toBeTruthy;
	});

	test('It passes automatic accesibility tests', async () => {
		const { container } = render(<Paragraph>I am paragraph</Paragraph>);

		expect(await axe(container)).toHaveNoViolations();
	});
});
