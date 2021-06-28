import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Button, { ButtonProps } from './Button';
import { tokens } from './Button.Tokens';

describe('Button', () => {
	test('The click callback is fired', () => {
		let isClicked = false;
		const { getByText } = render(<Button onClick={() => (isClicked = true)}>I am button</Button>);

		const buttonElement = getByText('I am button');
		fireEvent.click(buttonElement);

		expect(isClicked).toBe(true);
	});

	// The exact CSS values in the following tests are not relevant, they are only used
	// to confirm that a certain set of styles has indeed been applied.
	describe('The variants are applied correctly', () => {
		function noOp() {
			return;
		}

		function getButtonStyles(props?: Partial<ButtonProps>) {
			const { getByText } = render(
				<Button {...props} onClick={noOp}>
					A button
				</Button>
			);
			const buttonElement = getByText('A button');
			return getComputedStyle(buttonElement);
		}

		test('Default', () => {
			expect(getButtonStyles().backgroundColor).toBe(tokens.buttonPrimaryBgColor.styles);
		});

		test('Primary', () => {
			expect(getButtonStyles({ variant: 'primary' }).backgroundColor).toBe(
				tokens.buttonPrimaryBgColor.styles
			);
		});

		test('Secondary', () => {
			expect(getButtonStyles({ variant: 'secondary' }).backgroundColor).toBe(
				tokens.buttonSecondaryBgColor.styles
			);
		});

		test('Link', () => {
			expect(getButtonStyles({ variant: 'link' }).color).toBe(tokens.buttonLinkTextColor.styles);
		});

		test('Disabled', () => {
			expect(getButtonStyles({ disabled: true }).backgroundColor).toBe(
				tokens.buttonDisabledBgColor.styles
			);
		});

		test('Small', () => {
			expect(getButtonStyles({ small: true }).minWidth).toBe(tokens.buttonSmallMinWidth.styles);
		});
	});
});
