import { render } from '@testing-library/react';
import React from 'react';
import Row from '~components/row/Row';

describe('Row', () => {
	test('The row has children', () => {
		const { container } = render(
			<Row>
				<div className="child"></div>
				<div className="child"></div>
			</Row>
		);

		expect(container.querySelectorAll('.child').length).toBe(2);
	});
});
