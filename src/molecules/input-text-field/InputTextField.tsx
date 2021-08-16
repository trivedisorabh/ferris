import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ForwardedRef, forwardRef, HTMLAttributes } from 'react';
import InputText, { InputTextProps } from '~atoms/input-text/InputText';
import Label, { LabelProps } from '~atoms/label/Label';
import Colors from '~tokens/colors/Colors';

export interface InputTextFieldProps extends HTMLAttributes<HTMLDivElement> {
	id: string;
	label: string;
	value?: string;
	description?: string;
	disabled?: boolean;
	inputTextProps?: Partial<InputTextProps>;
	labelProps?: Partial<LabelProps>;
	required?: boolean;
	type?: InputTextProps['type'];
}

const InputTextField = forwardRef(
	(
		{
			id,
			label,
			type = 'text',
			value,
			description,
			disabled,
			labelProps,
			inputTextProps,
			required,
			...rest
		}: InputTextFieldProps,
		ref: ForwardedRef<HTMLDivElement>
	) => (
		<StyledInputTextField {...rest} data-tpl="input-text-field" disabled={disabled} ref={ref}>
			<Label {...labelProps} htmlFor={id} required={required} disabled={disabled}>
				{label}
			</Label>
			{description && <StyledDescription>{description}</StyledDescription>}
			<InputText
				{...inputTextProps}
				id={id}
				disabled={disabled}
				required={required}
				type={type}
				value={value}
			/>
		</StyledInputTextField>
	)
);

type StyledInputTextFieldProps = Pick<InputTextFieldProps, 'disabled'>;

const StyledInputTextField = styled.div(
	({ disabled }: StyledInputTextFieldProps) => css`
		display: flex;
		flex-direction: column;
		opacity: ${disabled && '0.5'};
	`
);

const StyledDescription = styled.div`
	color: ${Colors.grayDarkest};
`;

InputTextField.displayName = 'InputTextField';
export default InputTextField;