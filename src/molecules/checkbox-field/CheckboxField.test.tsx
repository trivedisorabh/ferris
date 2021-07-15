import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import React from 'react';
import CheckboxField from '~molecules/checkbox-field/CheckboxField';

describe('CheckboxField', () => {
	test('The checkbox gets checked when user clicks it', () => {
		const { getByLabelText } = render(
			<CheckboxField
				change={() => {
					// Do stuff
				}}
				id="myCheckboxField"
				label="CheckboxField"
			/>
		);
		const inputElement = getByLabelText('CheckboxField') as HTMLInputElement;
		userEvent.click(inputElement);
		expect(inputElement.checked).toBeTruthy();
	});

	test('It passes automatic accesibility tests', async () => {
		const { container } = render(
			<CheckboxField
				change={() => {
					// Do stuff
				}}
				id="myCheckboxField"
				label="CheckboxField"
			/>
		);
		expect(await axe(container)).toHaveNoViolations();
	});
});
