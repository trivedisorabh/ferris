import styled from '@emotion/styled';
import React, { ForwardedRef, forwardRef, TextareaHTMLAttributes } from 'react';
import Colors from '~tokens/colors/Colors';
import Spacings from '~tokens/spacings/Spacings';

/**
 * @category Props
 */
export interface TextAreaProps
	extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'children'> {
	id: string;
	value?: string;
}

/**
 * @category Template
 */
const TextArea = forwardRef(
	({ id, value, ...rest }: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>) => (
		<StyledTextArea {...rest} id={id} ref={ref}>
			{value}
		</StyledTextArea>
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
