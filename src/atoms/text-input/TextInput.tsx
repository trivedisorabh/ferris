import styled from '@emotion/styled';
import React from 'react';
import { InputType } from '~types/InputType';

/**
 * @category Props
 */
type TextInputTypes = Extract<
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

export interface TextInputProps {
	id: string;
	isDisabled?: boolean;
	isRequired?: boolean;
	type: TextInputTypes;
	value: string;
}

/**
 * @category Template
 */
const TextInput = ({ id, isDisabled, isRequired, type, value }: TextInputProps) => (
	<StTextInput disabled={isDisabled} id={id} required={isRequired} type={type} value={value} />
);

export default TextInput;

/**
 * @category Styles
 */
const StTextInput = styled.input`
	padding: 0.25rem;
	border: 1px solid #ccc;
	background: #fff;

	&:disabled {
		background: #ddd;
		cursor: not-allowed;
	}
`;
