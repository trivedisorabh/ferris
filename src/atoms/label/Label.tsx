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
	color: #333;
	display: flex;
	font-weight: bold;
	margin: 0 0 0.25rem;
`;

const StLabelSymbol = styled.i`
	color: red;
`;
