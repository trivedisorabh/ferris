import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ForwardedRef, forwardRef, HTMLAttributes } from 'react';
import InputText, { InputTextProps } from '~atoms/input-text/InputText';
import Label, { LabelProps } from '~atoms/label/Label';
import Colors from '~tokens/colors/Colors';

export interface TextFieldProps extends HTMLAttributes<HTMLDivElement> {
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

const TextField = forwardRef(
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
		}: TextFieldProps,
		ref: ForwardedRef<HTMLDivElement>
	) => (
		<StyledTextField {...rest} data-tpl="text-field" disabled={disabled} ref={ref}>
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
		</StyledTextField>
	)
);

type StyledTextFieldProps = Pick<TextFieldProps, 'disabled'>;

const StyledTextField = styled.div(
	({ disabled }: StyledTextFieldProps) => css`
		display: flex;
		flex-direction: column;
		opacity: ${disabled && '0.5'};
	`
);

const StyledDescription = styled.div`
	color: ${Colors.grayDarkest};
`;

TextField.displayName = 'TextField';
export default TextField;
