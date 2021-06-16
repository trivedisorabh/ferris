import styled from '@emotion/styled';
import React, { TextareaHTMLAttributes } from 'react';
import Colors from '~tokens/colors/Colors';
import Spacings from '~tokens/spacings/Spacings';

/**
 * @category Props
 */
export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	id: string;
}

/**
 * @category Template
 */
const TextArea = ({ id, value, cols, disabled, readOnly, required, rows }: TextAreaProps) => (
	<StRoot
		cols={cols}
		disabled={disabled}
		id={id}
		readOnly={readOnly}
		required={required}
		rows={rows}
		value={value}
	/>
);

export default TextArea;

/**
 * @category Styles
 */
const StRoot = styled.textarea`
	background: ${Colors.white};
	border: 1px solid ${Colors.grayDark};
	border-radius: 2px;
	padding: ${Spacings.xs};
	width: 100%;

	&:focus {
		border-color: #2563eb;
	}

	&:disabled {
		background: #ddd;
		cursor: not-allowed;
	}
`;
