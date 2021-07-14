import styled from '@emotion/styled';
import React, { ChangeEventHandler, ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';
import Colors from '~tokens/colors/Colors';

/**
 * @category Props
 */
export interface InputCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	id: string;
	onChange: ChangeEventHandler;
	checked?: boolean;
	disabled?: boolean;
}

/**
 * @category Template
 */
const InputCheckbox = forwardRef(
	(
		{ id, checked, disabled, onChange, ...rest }: InputCheckboxProps,
		ref: ForwardedRef<HTMLInputElement>
	) => (
		<StyledInputCheckbox
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

InputCheckbox.displayName = 'InputCheckbox';
export default InputCheckbox;

/**
 * @category Styles
 */
const StyledInputCheckbox = styled.input`
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
