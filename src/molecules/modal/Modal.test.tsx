import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import React from 'react';
import Modal from '~molecules/modal/Modal';

describe('Modal', () => {
	test('It passes automatic accesibility tests', async () => {
		const { container } = render(
			<Modal open={true} showCloseButton={true} headerText="I am modal dialog">
				<button>Focusable button</button>
			</Modal>
		);

		expect(await axe(container)).toHaveNoViolations();
	});

	test('The close button fires the right callback', () => {
		let closeButtonWasClicked = false;
		render(
			<Modal open={true} showCloseButton={true} onClose={() => (closeButtonWasClicked = true)}>
				<button>Focusable button</button>
			</Modal>
		);

		const closeButton = screen.getByRole('button', { name: 'Close' });
		userEvent.click(closeButton);

		expect(closeButtonWasClicked).toBe(true);
	});

	test('The modal traps focus', () => {
		render(
			<Modal open={true} showCloseButton={true} onClose={() => ({})}>
				<button>Content button</button>
			</Modal>
		);

		const closeButton = screen.getByRole('button', { name: 'Close' });
		const contentButton = screen.getByRole('button', { name: 'Content button' });

		userEvent.tab();
		expect(closeButton).toHaveFocus();

		userEvent.tab();
		expect(contentButton).toHaveFocus();

		userEvent.tab();
		expect(closeButton).toHaveFocus();
	});
});
