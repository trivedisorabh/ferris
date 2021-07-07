import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import React from 'react';
import InputTextField from '~components/input-text-field/InputTextField';

describe('InputTextField', () => {
	test('The input reacts to user input', () => {
		const { getByLabelText } = render(
			<InputTextField label="inputTextField" id="myInputTextField" />
		);
		const inputElement = getByLabelText('inputTextField') as HTMLInputElement;

		userEvent.type(inputElement, 'testing');

		expect(inputElement.value).toBe('testing');
	});

	test('The input gets a type attribute', () => {
		const { getByLabelText } = render(
			<InputTextField label="inputTextField" id="myInputTextField" />
		);
		const inputElement = getByLabelText('inputTextField') as HTMLInputElement;
		expect(inputElement.type).toBe('text');
	});

	test('It passes automatic accesibility tests', async () => {
		const { container } = render(<InputTextField label="inputTextField" id="myInputTextField" />);

		expect(await axe(container)).toHaveNoViolations();
	});
});
