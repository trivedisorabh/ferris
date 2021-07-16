import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Checkbox from '~atoms/checkbox/Checkbox';

describe('Checkbox', () => {
	test('The checkbox gets checked when user clicks it', () => {
		const { getByTitle } = render(<Checkbox id="myCheckbox" title="checkbox" />);
		const inputElement = getByTitle('checkbox') as HTMLInputElement;
		userEvent.click(inputElement);
		expect(inputElement.checked).toBeTruthy();
	});
});
