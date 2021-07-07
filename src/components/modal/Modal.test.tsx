import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import React from 'react';
import Modal from '~components/modal/Modal';

describe('Modal', () => {
	test('It passes automatic accesibility tests', async () => {
		const { container } = render(<Modal open={true}></Modal>);

		expect(await axe(container)).toHaveNoViolations();
	});
});
