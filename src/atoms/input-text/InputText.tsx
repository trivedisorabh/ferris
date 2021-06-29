import styled from '@emotion/styled';
import React, { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';
import Colors from '~tokens/colors/Colors';
import Spacings from '~tokens/spacings/Spacings';
import { InputType } from '~types/InputType';

/**
 * @category Props
 */
type InputTextTypes = Extract<
	InputType,
	| 'date'
	| 'datetime-local'
	| 'datetime'
	| 'email'
	| 'hidden'
	| 'month'
	| 'number'
	| 'password'
	| 'search'
	| 'tel'
	| 'text'
	| 'time'
	| 'week'
>;

export interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
	id: string;
	type?: InputTextTypes;
}

/**
 * @category Template
 */
const InputText = forwardRef(
	({ id, type = 'text', ...rest }: InputTextProps, ref: ForwardedRef<HTMLInputElement>) => (
		<StyledInputText {...rest} id={id} ref={ref} type={type} />
	)
);

InputText.displayName = 'InputText';
export default InputText;

/**
 * @category Styles
 */
const StyledInputText = styled.input`
	background: #fff;
	border: 1px solid ${Colors.grayDark};
	padding: ${Spacings.xxs};

	&:focus {
		border-color: #2563eb;
	}

	&:disabled {
		background: #ddd;
		cursor: not-allowed;
	}
`;
