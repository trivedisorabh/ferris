import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import InputTextField from '~components/input-text-field/InputTextField';

describe('InputTextField', () => {
	test('The input reacts to user input', () => {
		const { getByLabelText } = render(
			<InputTextField label="inputTextField" type="text" id="myInputTextField" />
		);
		const inputElement = getByLabelText('inputTextField') as HTMLInputElement;

		userEvent.type(inputElement, 'testing');

		expect(inputElement.value).toBe('testing');
	});
});
