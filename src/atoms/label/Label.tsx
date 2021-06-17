import styled from '@emotion/styled';
import React, { LabelHTMLAttributes } from 'react';
import Colors from '~tokens/colors/Colors';
import FontWeights from '~tokens/font-weights/FontWeights';
import Spacings from '~tokens/spacings/Spacings';

/**
 * @category Props
 */
export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
	children: string;
	id: string;
	required?: boolean;
}

/**
 * @category Template
 */
const Label = ({ id, children, required, ...rest }: LabelProps) => (
	<StRoot {...rest} htmlFor={id}>
		{children}
		{required && <StLabelSymbol aria-hidden="true">*</StLabelSymbol>}
	</StRoot>
);

export default Label;

/**
 * @category Styles
 */
const StRoot = styled.label`
	color: ${Colors.blackBrand};
	display: flex;
	font-weight: ${FontWeights.bold};
	margin: 0 0 ${Spacings.xxs};
`;

const StLabelSymbol = styled.i`
	color: ${Colors.redBase};
`;
