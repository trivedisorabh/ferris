import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import React from 'react';
import TextAreaField from '~molecules/text-area-field/TextAreaField';

describe('TextAreaField', () => {
	test('The input reacts to user input', () => {
		const { getByLabelText } = render(
			<TextAreaField label="inputTextField" id="myInputTextField" />
		);
		const textArea = getByLabelText('inputTextField') as HTMLTextAreaElement;

		userEvent.type(textArea, 'testing');

		expect(textArea.value).toBe('testing');
	});

	test('It passes automatic accesibility tests', async () => {
		const { container } = render(<TextAreaField label="inputTextField" id="myInputTextField" />);

		expect(await axe(container)).toHaveNoViolations();
	});
});
