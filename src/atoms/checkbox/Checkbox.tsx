import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';
import Colors from '~tokens/colors/Colors';
import Sizes from '~tokens/sizes/Sizes';

/**
 * @category Props
 */
export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	small?: boolean;
}

/**
 * @category Template
 */
const Checkbox = forwardRef(
	(
		{ id, defaultChecked, checked, disabled, onChange, small, ...rest }: CheckboxProps,
		ref: ForwardedRef<HTMLInputElement>
	) => {
		return (
			<>
				<StyledCheckbox
					type="checkbox"
					checked={checked}
					defaultChecked={defaultChecked}
					disabled={disabled}
					id={id}
					onChange={onChange}
					ref={ref}
					small={small}
					{...rest}
				/>
				<StyledCheckmark ref={ref} small={small}></StyledCheckmark>
			</>
		);
	}
);

Checkbox.displayName = 'Checkbox';
export default Checkbox;

/**
 * @category Styles
 */

type StyledCheckboxProps = Pick<CheckboxProps, 'small'>;

const StyledCheckbox = styled.input(({ small }: StyledCheckboxProps) => {
	const widthAndHeight = small ? Sizes.size_1_125 : Sizes.size_1_5;

	return css`
		cursor: pointer;
		height: ${widthAndHeight};
		margin: 0;
		opacity: 0;
		position: absolute;
		width: ${widthAndHeight};

		&:disabled {
			cursor: not-allowed;
		}

		&:disabled ~ div {
			background-color: ${Colors.grayDark} !important;
			border: none;
		}

		&:checked ~ div {
			background-color: ${Colors.brandBase};
			border: none;
		}

		&:checked ~ div::after {
			display: block;
		}
	`;
});

const StyledCheckmark = styled.div(({ small }: StyledCheckboxProps) => {
	const widthAndHeight = small ? Sizes.size_1_125 : Sizes.size_1_5;

	return css`
		background-color: ${Colors.white};
		border: solid 1px ${Colors.grayDark};
		border-radius: 2px;
		height: ${widthAndHeight};
		pointer-events: none;
		position: relative;
		width: ${widthAndHeight};

		&::after {
			border: solid ${Colors.white};
			border-width: 0 3px 3px 0;
			content: '';
			display: none;
			height: ${small ? '12px' : '14px'};
			left: ${small ? '6px' : '9px'};
			position: absolute;
			top: ${small ? '2px' : '4px'};
			-ms-transform: rotate(45deg);
			-webkit-transform: rotate(45deg);
			transform: rotate(45deg);
			width: 6px;
		}
	`;
});
