import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import React from 'react';
import Icon from '~components/icon/Icon';
import Icons from '~tokens/icons/Icons';

describe('Icon', () => {
	test('The Icon component has SVG', () => {
		const { container } = render(<Icon icon={Icons.Check} />);
		expect(container.querySelector(`span svg`)).toBeTruthy();
	});

	test('It passes automatic accesibility tests', async () => {
		const { container } = render(<Icon icon={Icons.Check} />);

		expect(await axe(container)).toHaveNoViolations();
	});
});
