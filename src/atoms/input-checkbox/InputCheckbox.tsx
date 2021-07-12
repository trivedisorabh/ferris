import styled from '@emotion/styled';
import React, { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';
import Colors from '~tokens/colors/Colors';

/**
 * @category Props
 */
export interface InputCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	id: string;
}

/**
 * @category Template
 */
const InputCheckbox = forwardRef(
	({ id, ...rest }: InputCheckboxProps, ref: ForwardedRef<HTMLInputElement>) => (
		<StyledInputCheckbox {...rest} id={id} ref={ref} type="checkbox" />
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

	&:checked ~ .checkmark {
		background-color: ${Colors.brandBase};
		border: none;
	}

	&:checked ~ .checkmark::after {
		display: block;
	}
`;
