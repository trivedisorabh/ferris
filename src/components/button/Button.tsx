import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ButtonHTMLAttributes, ReactChild } from 'react';
import { tokens } from './Button.Tokens';

/**
 * @category Props
 */
export interface ButtonProps {
	children: ReactChild;
	onClick: () => void;
	isDisabled?: boolean;
	small?: boolean;
	type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
	variant?: 'primary' | 'secondary' | 'link';
}

/**
 * @category Template
 */
const Button = ({
	children,
	onClick,
	isDisabled,
	small,
	type = 'button',
	variant = 'primary',
}: ButtonProps) => (
	<StRoot onClick={onClick} disabled={isDisabled} small={small} type={type} variant={variant}>
		{children}
	</StRoot>
);

export default Button;

/**
 * @category Styles
 */
type StRootProps = Pick<ButtonProps, 'small' | 'variant'>;

const StRoot = styled.button(
	({ small, variant }: StRootProps) => css`
		border-radius: ${tokens.buttonBorderRadius};
		cursor: pointer;
		font-size: 1rem;
		font-weight: bold;
		height: 40px;
		min-width: ${tokens.buttonMinWidth};
		padding: 0 ${tokens.buttonHorizontalPadding};
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
			background-color: ${tokens.buttonDisabledBgColor};
			border: none;
			color: ${tokens.buttonDisabledTextColor};
			cursor: not-allowed;
		}

		${small &&
		css`
			font-size: 0.875rem;
			height: 30px;
			min-width: ${tokens.buttonSmallMinWidth};
		`}

		${variant === 'primary' &&
		css`
			background-color: ${tokens.buttonPrimaryBgColor};
			border: none;
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
			background-color: ${tokens.buttonSecondaryBgColor};
			border: 1px solid ${tokens.buttonSecondaryBorderColor};
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
			background: none;
			border: none;
			color: ${tokens.buttonLinkTextColor};
			min-width: initial;
			padding: 0;

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
