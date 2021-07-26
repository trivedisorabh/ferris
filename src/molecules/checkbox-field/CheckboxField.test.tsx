import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import React from 'react';
import CheckboxField from '~molecules/checkbox-field/CheckboxField';

describe('CheckboxField', () => {
	test('The checkbox gets checked when user clicks it', () => {
		const { getByLabelText } = render(<CheckboxField label="CheckboxField" />);

		const inputElement = getByLabelText('CheckboxField');
		userEvent.click(inputElement);

		expect(inputElement).toBeChecked();
	});

	test('It passes automatic accesibility tests', async () => {
		const { container } = render(<CheckboxField id="myCheckboxField" label="CheckboxField" />);
		expect(await axe(container)).toHaveNoViolations();
	});
});
