import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import Label from '~atoms/label/Label';
import TextInput, { TextInputProps } from '~atoms/text-input/TextInput';

/**
 * @category Props
 */
export interface TextFieldProps {
	description: string;
	id: string;
	isDisabled?: boolean;
	isRequired?: boolean;
	label: string;
	type: TextInputProps['type'];
	value: string;
}

/**
 * @category Template
 */
const TextField = ({
	description,
	id,
	isDisabled,
	isRequired,
	label,
	type,
	value,
}: TextFieldProps) => (
	<StTextField isDisabled={isDisabled}>
		<Label id={id} isRequired={isRequired}>
			{label}
		</Label>
		{description && <StTextFieldDesc>{description}</StTextFieldDesc>}
		<TextInput id={id} isDisabled={isDisabled} isRequired={isRequired} type={type} value={value} />
	</StTextField>
);

export default TextField;

/**
 * @category Styles
 */
type StProps = Pick<TextFieldProps, 'isDisabled'>;

const StTextField = styled.div(
	({ isDisabled }: StProps) => css`
		opacity: ${isDisabled && '0.5'};
	`
);

const StTextFieldDesc = styled.div`
	font-size: 0.875rem;
`;
