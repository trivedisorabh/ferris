import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import React from 'react';
import TextField from '~molecules/text-field/TextField';

describe('TextField', () => {
	test('The input reacts to user input', () => {
		const { getByLabelText } = render(<TextField label="textField" id="myTextField" />);
		const inputElement = getByLabelText('textField') as HTMLInputElement;

		userEvent.type(inputElement, 'testing');

		expect(inputElement.value).toBe('testing');
	});

	test('The input gets a type attribute', () => {
		const { getByLabelText } = render(<TextField label="textField" id="myTextField" />);
		const inputElement = getByLabelText('textField') as HTMLInputElement;
		expect(inputElement.type).toBe('text');
	});

	test('It passes automatic accesibility tests', async () => {
		const { container } = render(<TextField label="textField" id="myTextField" />);

		expect(await axe(container)).toHaveNoViolations();
	});
});
