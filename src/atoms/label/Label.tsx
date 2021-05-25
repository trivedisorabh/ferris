import styled from '@emotion/styled';
import React from 'react';

/**
 * @category Props
 */
export interface LabelProps {
	children: string;
	className?: string;
	id: string;
	isRequired?: boolean;
}

/**
 * @category Template
 */
const Label = ({ className, id, children, isRequired }: LabelProps) => (
	<StLabel className={className} htmlFor={id}>
		{children}
		{isRequired && <StLabelSymbol aria-hidden="true">*</StLabelSymbol>}
	</StLabel>
);

export default Label;

/**
 * @category Styles
 */
const StLabel = styled.label`
	display: flex;
	margin: 0 0 0.25rem;
	color: #333;
	font-weight: bold;
`;

const StLabelSymbol = styled.i`
	color: red;
`;
