import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import React from 'react';
import Loader from '~components/loader/Loader';

describe('Loader', () => {
	test('It passes automatic accesibility tests', async () => {
		const { container } = render(<Loader />);

		expect(await axe(container)).toHaveNoViolations();
	});
});
