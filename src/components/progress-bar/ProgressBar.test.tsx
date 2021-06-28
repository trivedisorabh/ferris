import { render } from '@testing-library/react';
import React from 'react';
import ProgressBar from '~components/progress-bar/ProgressBar';

describe('ProgressBar', () => {
	test('The progress bar has a value', () => {
		const { getByTitle } = render(<ProgressBar title="progress" value={10} />);

		expect(getByTitle('progress').getAttribute('value')).toEqual('10');
	});
});
