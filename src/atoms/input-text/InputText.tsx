import styled from '@emotion/styled';
import React, { InputHTMLAttributes } from 'react';
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
	type: InputTextTypes;
}

/**
 * @category Template
 */
const InputText = ({ id, type, disabled, readOnly, value, required }: InputTextProps) => (
	<StRoot
		disabled={disabled}
		id={id}
		readOnly={readOnly}
		required={required}
		type={type}
		value={value}
	/>
);

export default InputText;

/**
 * @category Styles
 */
const StRoot = styled.input`
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
