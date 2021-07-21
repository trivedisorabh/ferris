import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ForwardedRef, forwardRef, LabelHTMLAttributes } from 'react';
import Colors from '~tokens/colors/Colors';
import FontSizes from '~tokens/font-sizes/FontSizes';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
	required?: boolean;
	disabled?: boolean;
	small?: boolean;
}

const Label = forwardRef(
	({ htmlFor, children, required, ...rest }: LabelProps, ref: ForwardedRef<HTMLLabelElement>) => (
		<StyledLabel {...rest} htmlFor={htmlFor} ref={ref}>
			{children}
			{required && <StyledAsterisk aria-label="Required">*</StyledAsterisk>}
		</StyledLabel>
	)
);

type StyledLabelProps = Pick<LabelProps, 'small' | 'disabled'>;

const StyledLabel = styled.label(
	({ small, disabled }: StyledLabelProps) => css`
		color: ${disabled ? Colors.grayDarker : Colors.blackBrand};
		cursor: ${disabled ? 'not-allowed' : 'pointer'};
		font-size: ${small ? FontSizes.sm : FontSizes.md};
		line-height: ${small ? 1.3 : 'initial'};
		margin: 0;
	`
);

const StyledAsterisk = styled.span`
	color: ${Colors.redBase};
`;

Label.displayName = 'Label';
export default Label;
