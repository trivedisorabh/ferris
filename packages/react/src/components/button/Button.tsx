import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ReactChild } from 'react';
import { tokens } from './Button.Tokens';

/**
 * @category Props
 */
export interface ButtonProps {
	children: ReactChild;
	isDisabled?: boolean;
	onClick: () => void;
	small?: boolean;
	variant: 'primary' | 'secondary' | 'link';
}

/**
 * @category Template
 */
const Button = ({ children, isDisabled, onClick, small, variant }: ButtonProps) => (
	<StButton disabled={isDisabled} small={small} onClick={onClick} variant={variant}>
		{children}
	</StButton>
);

export default Button;

/**
 * @category Styles
 */
type StProps = Partial<ButtonProps>;

const StButton = styled.button(
	({ small, variant }: StProps) => css`
		min-width: ${tokens.buttonMinWidth};
		height: 40px;
		padding: 0 ${tokens.buttonHorizontalPadding};
		border-radius: ${tokens.buttonBorderRadius};
		cursor: pointer;
		font-size: 1rem;
		font-weight: bold;
		transition-duration: ${tokens.transitionDuration};
		transition-property: background-color, color;

		&:focus-visible {
			outline-color: ${tokens.buttonPrimaryBgColor};
			outline-offset: 2px;
			outline-style: solid;
			outline-width: 2px;
		}

		@supports not selector(:focus-visible) {
			&:focus {
				outline-color: ${tokens.buttonPrimaryBgColor};
				outline-offset: 2px;
				outline-style: solid;
				outline-width: 2px;
			}
		}

		&:disabled,
		&:disabled:hover,
		&:disabled:active {
			border: none;
			background-color: ${tokens.buttonDisabledBgColor};
			color: ${tokens.buttonDisabledTextColor};
			cursor: not-allowed;
		}

		${small &&
		css`
			min-width: ${tokens.buttonSmallMinWidth};
			height: 30px;
			font-size: 0.875rem;
		`}

		${variant === 'primary' &&
		css`
			border: none;
			background-color: ${tokens.buttonPrimaryBgColor};
			color: ${tokens.buttonPrimaryTextColor};

			&:hover {
				background-color: ${tokens.buttonPrimaryHoverBgColor};
			}

			&:active {
				background-color: ${tokens.buttonPrimaryActiveBgColor};
			}
		`}

		${variant === 'secondary' &&
		css`
			border: 1px solid ${tokens.buttonSecondaryBorderColor};
			background-color: ${tokens.buttonSecondaryBgColor};
			color: ${tokens.buttonSecondaryTextColor};

			&:hover {
				background-color: ${tokens.buttonSecondaryHoverBgColor};
			}

			&:active {
				background-color: ${tokens.buttonSecondaryActiveBgColor};
			}
		`}

		${variant === 'link' &&
		css`
			min-width: initial;
			padding: 0;
			border: none;
			background: none;
			color: ${tokens.buttonLinkTextColor};

			&:disabled,
			&:disabled:hover,
			&:disabled:active {
				background: none;
			}

			&:hover:not(:disabled) {
				text-decoration-line: underline;
				text-decoration-thickness: 2px;
			}
		`}
	`
);
