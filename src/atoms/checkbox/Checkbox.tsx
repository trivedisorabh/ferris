import styled from '@emotion/styled';
import React, { ChangeEventHandler, ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';
import Colors from '~tokens/colors/Colors';

/**
 * @category Props
 */
export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	id: string;
	onChange: ChangeEventHandler;
	checked?: boolean;
	disabled?: boolean;
}

/**
 * @category Template
 */
const Checkbox = forwardRef(
	(
		{ id, checked, disabled, onChange, ...rest }: CheckboxProps,
		ref: ForwardedRef<HTMLInputElement>
	) => (
		<StyledCheckbox
			{...rest}
			disabled={disabled}
			checked={checked}
			id={id}
			onChange={onChange}
			ref={ref}
			type="checkbox"
		/>
	)
);

Checkbox.displayName = 'Checkbox';
export default Checkbox;

/**
 * @category Styles
 */
const StyledCheckbox = styled.input`
	cursor: pointer;
	height: 0;
	opacity: 0;
	position: absolute;
	width: 0;

	&:disabled ~ .checkmark {
		background-color: ${Colors.grayDark} !important;
		border: none;
	}

	&:checked ~ .checkmark {
		background-color: ${Colors.brandBase};
		border: none;
	}

	&:checked ~ .checkmark::after {
		display: block;
	}
`;
