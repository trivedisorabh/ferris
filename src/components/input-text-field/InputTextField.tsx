import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import InputText, { InputTextProps } from '~atoms/input-text/InputText';
import Label from '~atoms/label/Label';
import Colors from '~tokens/colors/Colors';

/**
 * @category Props
 */
export interface InputTextFieldProps {
	description: string;
	id: string;
	label: string;
	type: InputTextProps['type'];
	disabled?: boolean;
	required?: boolean;
	value?: string;
}

/**
 * @category Template
 */
const InputTextField = ({
	description,
	id,
	label,
	type,
	disabled,
	required,
	value,
}: InputTextFieldProps) => (
	<StRoot disabled={disabled}>
		<Label id={id} required={required}>
			{label}
		</Label>
		{description && <StDescription>{description}</StDescription>}
		<InputText id={id} disabled={disabled} required={required} type={type} value={value} />
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
