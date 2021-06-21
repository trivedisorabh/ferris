import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ForwardedRef, forwardRef, HTMLAttributes } from 'react';
import InputText, { InputTextProps } from '~atoms/input-text/InputText';
import Label, { LabelProps } from '~atoms/label/Label';
import Colors from '~tokens/colors/Colors';

/**
 * @category Props
 */
export interface InputTextFieldProps extends HTMLAttributes<HTMLDivElement> {
	id: string;
	label: string;
	type: InputTextProps['type'];
	description?: string;
	disabled?: boolean;
	inputTextProps?: Partial<InputTextProps>;
	labelProps?: Partial<LabelProps>;
	required?: boolean;
	value?: string;
}

/**
 * @category Template
 */
const InputTextField = forwardRef(
	(
		{
			id,
			label,
			type,
			description,
			disabled,
			labelProps,
			inputTextProps,
			required,
			value,
			...rest
		}: InputTextFieldProps,
		ref: ForwardedRef<HTMLDivElement>
	) => (
		<StyledInputTextField {...rest} data-tpl="input-text-field" disabled={disabled} ref={ref}>
			<Label {...labelProps} id={id} required={required}>
				{label}
			</Label>
			{description && <StDescription>{description}</StDescription>}
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

InputTextField.displayName = 'InputTextField';
export default InputTextField;

/**
 * @category Styles
 */
type StyledInputTextFieldProps = Pick<InputTextFieldProps, 'disabled'>;

const StyledInputTextField = styled.div(
	({ disabled }: StyledInputTextFieldProps) => css`
		opacity: ${disabled && '0.5'};
	`
);

const StDescription = styled.div`
	color: ${Colors.grayDarkest};
`;
