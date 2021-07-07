import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import React from 'react';
import Spacer from '~components/spacer/Spacer';
import Spacings from '~tokens/spacings/Spacings';

describe('Loader', () => {
	test('It passes automatic accesibility tests', async () => {
		const { container } = render(<Spacer spacing={Spacings.md} />);

		expect(await axe(container)).toHaveNoViolations();
	});
});
