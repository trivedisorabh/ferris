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

	test('The content is rendered', () => {
		const { getByText } = render(
			<Modal open={true} showCloseButton={true} headerText="I am modal dialog">
				Such content, wow!
			</Modal>
		);

		expect(getByText('Such content, wow!')).toBeInTheDocument();
	});

	test('The close button fires the close callback', () => {
		const closeCallback = jest.fn();
		render(
			<Modal open={true} showCloseButton={true} onClose={closeCallback}>
				<button>Focusable button</button>
			</Modal>
		);

		const closeButton = screen.getByRole('button', { name: 'Close' });
		userEvent.click(closeButton);

		expect(closeCallback).toHaveBeenCalledTimes(1);
	});

	test('Pressing Escape fires the close callback', () => {
		const closeCallback = jest.fn();
		render(
			<Modal open={true} showCloseButton={true} onClose={closeCallback}>
				<button>Focusable button</button>
			</Modal>
		);

		userEvent.keyboard('{Escape}');

		expect(closeCallback).toHaveBeenCalledTimes(1);
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
