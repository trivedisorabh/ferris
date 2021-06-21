import styled from '@emotion/styled';
import React, { ForwardedRef, forwardRef, LabelHTMLAttributes } from 'react';
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
const Label = forwardRef(
	({ id, children, required, ...rest }: LabelProps, ref: ForwardedRef<HTMLLabelElement>) => (
		<StyledLabel {...rest} htmlFor={id} ref={ref}>
			{children}
			{required && <StyledSymbol aria-hidden="true">*</StyledSymbol>}
		</StyledLabel>
	)
);

Label.displayName = 'Label';
export default Label;

/**
 * @category Styles
 */
const StyledLabel = styled.label`
	color: ${Colors.blackBrand};
	display: flex;
	font-weight: ${FontWeights.bold};
	margin: 0 0 ${Spacings.xxs};
`;

const StyledSymbol = styled.i`
	color: ${Colors.redBase};
`;
