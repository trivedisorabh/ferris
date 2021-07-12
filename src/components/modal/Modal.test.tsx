import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import React from 'react';
import Modal from '~components/modal/Modal';

describe('Modal', () => {
	test('It passes automatic accesibility tests', async () => {
		const { container } = render(
			<Modal open={true} showCloseButton={true} headerText="I am modal dialog"></Modal>
		);

		expect(await axe(container)).toHaveNoViolations();
	});

	test('the close button fires the right callback', () => {
		let closeButtonWasClicked = false;
		render(
			<Modal
				open={true}
				showCloseButton={true}
				onClose={() => (closeButtonWasClicked = true)}
			></Modal>
		);

		const closeButton = screen.getByRole('button', { name: 'Close' });

		userEvent.click(closeButton);

		expect(closeButtonWasClicked).toBe(true);
	});
});
