import { render } from '@testing-library/react';
import React from 'react';
import Row from '~components/row/Row';

describe('Row', () => {
	test('The row has children', () => {
		const { container } = render(
			<Row>
				<div></div>
				<div></div>
			</Row>
		);

		expect(container.querySelector('div')).toBeTruthy();
	});
});
