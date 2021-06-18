import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { HTMLAttributes } from 'react';
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
const InputTextField = ({
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
}: InputTextFieldProps) => (
	<StRoot {...rest} data-tpl="input-text-field" disabled={disabled}>
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
	</StRoot>
);

export default InputTextField;

/**
 * @category Styles
 */
type StRootProps = Pick<InputTextFieldProps, 'disabled'>;

const StRoot = styled.div(
	({ disabled }: StRootProps) => css`
		opacity: ${disabled && '0.5'};
	`
);

const StDescription = styled.div`
	color: ${Colors.grayDarkest};
`;
