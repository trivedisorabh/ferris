import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ButtonHTMLAttributes, ForwardedRef, forwardRef, ReactChild } from 'react';

/**
 * @category Props
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactChild;
	onClick: () => void;
	small?: boolean;
	variant?: 'primary' | 'secondary' | 'link';
}

/**
 * @category Template
 */
const Button = forwardRef(
	(
		{ children, onClick, small, type = 'button', variant = 'primary', ...rest }: ButtonProps,
		ref: ForwardedRef<HTMLButtonElement>
	) => (
		<StyledButton {...rest} onClick={onClick} ref={ref} small={small} type={type} variant={variant}>
			{children}
		</StyledButton>
	)
);

Button.displayName = 'Button';
export default Button;

/**
 * @category Styles
 */
type StyledButtonProps = Pick<ButtonProps, 'small' | 'variant'>;

const StyledButton = styled.button(
	({ small, variant }: StyledButtonProps) => css`
		border-radius: 2px;
		cursor: pointer;
		font-size: 1rem;
		font-weight: bold;
		height: 40px;
		min-width: 130px;
		padding: 0 16px;
		transition-duration: 300ms;
		transition-property: background-color, color;

		&:focus-visible {
			outline-color: rgb(15, 88, 214);
			outline-offset: 2px;
			outline-style: solid;
			outline-width: 2px;
		}

		@supports not selector(:focus-visible) {
			&:focus {
				outline-color: rgb(15, 88, 214);
				outline-offset: 2px;
				outline-style: solid;
				outline-width: 2px;
			}
		}

		&:disabled,
		&:disabled:hover,
		&:disabled:active {
			background-color: rgb(235, 236, 238);
			border: none;
			color: rgb(170, 175, 184);
			cursor: not-allowed;
		}

		${small &&
		css`
			font-size: 0.875rem;
			height: 30px;
			min-width: 80px;
		`}

		${variant === 'primary' &&
		css`
			background-color: rgb(15, 88, 214);
			border: none;
			color: #fff;

			&:hover {
				background-color: rgb(12, 74, 182);
			}

			&:active {
				background-color: rgba(9, 57, 139);
			}
		`}

		${variant === 'secondary' &&
		css`
			background-color: rgb(255, 255, 255);
			border: 1px solid rgb(15, 88, 214);
			color: rgb(15, 88, 214);

			&:hover {
				background-color: rgb(235, 236, 238);
			}

			&:active {
				background-color: rgb(226, 228, 231);
			}
		`}

		${variant === 'link' &&
		css`
			background: none;
			border: none;
			color: rgb(15, 88, 214);
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
