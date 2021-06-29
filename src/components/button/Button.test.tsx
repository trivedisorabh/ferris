import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Button from './Button';

describe('Button', () => {
	test('The click callback is fired', () => {
		let isClicked = false;
		const { getByText } = render(<Button onClick={() => (isClicked = true)}>I am button</Button>);

		const buttonElement = getByText('I am button');
		fireEvent.click(buttonElement);

		expect(isClicked).toBe(true);
	});
});
