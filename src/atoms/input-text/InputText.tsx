import styled from '@emotion/styled';
import React, { ChangeEvent, ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';
import { focusOutline } from '~common/styles';
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
	| 'password'
	| 'search'
	| 'tel'
	| 'text'
	| 'time'
	| 'week'
>;

export interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
	defaultValue?: string;
	id: string;
	type?: InputTextTypes;
	onChange?: (event: ChangeEvent) => void;
}

/**
 * @category Template
 */
const InputText = forwardRef(
	(
		{ defaultValue, id, onChange, type = 'text', ...rest }: InputTextProps,
		ref: ForwardedRef<HTMLInputElement>
	) => (
		<StyledInputText
			{...rest}
			defaultValue={defaultValue}
			id={id}
			onChange={onChange}
			ref={ref}
			type={type}
		/>
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

	&[type='search']::-webkit-search-cancel-button {
		display: none;
	}

	&:focus {
		${focusOutline}
	}

	&:disabled {
		background: #ddd;
		cursor: not-allowed;
	}
`;
