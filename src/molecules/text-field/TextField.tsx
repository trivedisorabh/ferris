import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ForwardedRef, forwardRef, HTMLAttributes } from 'react';
import InputText, { InputTextProps } from '~atoms/input-text/InputText';
import Label, { LabelProps } from '~atoms/label/Label';
import Colors from '~tokens/colors/Colors';

/**
 * @category Props
 */
export interface TextFieldProps extends HTMLAttributes<HTMLDivElement> {
	description?: string;
	disabled?: boolean;
	id: string;
	inputTextProps?: Partial<InputTextProps>;
	label: string;
	labelProps?: Partial<LabelProps>;
	required?: boolean;
	type?: Exclude<InputTextProps['type'], 'number' | 'search'>;
	value?: string;
}

/**
 * @category Template
 */
const TextField = forwardRef(
	(
		{
			description,
			disabled,
			id,
			inputTextProps,
			label,
			labelProps,
			required,
			type = 'text',
			value,
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

TextField.displayName = 'TextField';
export default TextField;

/**
 * @category Styles
 */
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
