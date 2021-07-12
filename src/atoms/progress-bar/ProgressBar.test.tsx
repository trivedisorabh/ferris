import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import React from 'react';
import ProgressBar from '~atoms/progress-bar/ProgressBar';

describe('ProgressBar', () => {
	test('The progress bar has a value', () => {
		const { getByTitle } = render(<ProgressBar title="progress" value={10} />);
		const element = getByTitle('progress');
		expect(element.getAttribute('value')).toEqual('10');
	});

	test('It passes automatic accesibility tests', async () => {
		const { container } = render(<ProgressBar title="progress" value={10} />);

		expect(await axe(container)).toHaveNoViolations();
	});
});
