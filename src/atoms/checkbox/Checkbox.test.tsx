import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import Checkbox from '~atoms/checkbox/Checkbox';

describe('Checkbox', () => {
	test('The uncontrolled checkbox fires onChange event', () => {
		const changeHandler = jest.fn();
		const { getByRole } = render(<Checkbox onChange={changeHandler} />);

		const checkbox = getByRole('checkbox');
		userEvent.click(checkbox);

		expect(changeHandler).toHaveBeenCalledTimes(1);
		expect(checkbox).toBeChecked();
	});

	test('The controlled checkbox fires callback and changes state', () => {
		const CheckboxComponent = () => {
			const [checked, setChecked] = useState(false);
			return <Checkbox checked={checked} onChange={() => setChecked(!checked)} />;
		};

		const { getByRole } = render(<CheckboxComponent />);

		const checkbox = getByRole('checkbox');
		expect(checkbox).not.toBeChecked();

		userEvent.click(checkbox);
		expect(checkbox).toBeChecked();
	});
});
