import styled from '@emotion/styled';
import React, { ForwardedRef, forwardRef, TextareaHTMLAttributes } from 'react';
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
const TextArea = forwardRef(
	({ id, ...rest }: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>) => (
		<StyledTextArea {...rest} id={id} ref={ref} />
	)
);

TextArea.displayName = 'TextArea';
export default TextArea;

/**
 * @category Styles
 */
const StyledTextArea = styled.textarea`
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
