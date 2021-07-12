import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import React from 'react';
import Row from '~atoms/row/Row';

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

	test('It passes automatic accesibility tests', async () => {
		const { container } = render(
			<Row>
				<div className="child"></div>
				<div className="child"></div>
			</Row>
		);

		expect(await axe(container)).toHaveNoViolations();
	});
});
