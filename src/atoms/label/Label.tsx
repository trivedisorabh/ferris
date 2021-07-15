import styled from '@emotion/styled';
import React, { ForwardedRef, forwardRef, LabelHTMLAttributes } from 'react';
import Colors from '~tokens/colors/Colors';
import FontSizes from '~tokens/font-sizes/FontSizes';
import FontWeights from '~tokens/font-weights/FontWeights';
import Spacings from '~tokens/spacings/Spacings';

/**
 * @category Props
 */
export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
	children: React.ReactNode;
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

	&.checkbox-label {
		cursor: pointer;
		display: block;
		font-size: ${FontSizes.lg};
		font-weight: ${FontWeights.normal} !important;
		line-height: 1.4;
		margin-bottom: ${Spacings.sm};
		padding-left: ${Spacings.xxl};
		position: relative;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	&.small {
		font-size: ${FontSizes.sm};
		line-height: 1.3;
	}
`;

const StyledSymbol = styled.i`
	color: ${Colors.redBase};
`;
