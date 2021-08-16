import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ForwardedRef, forwardRef, LabelHTMLAttributes } from 'react';
import Colors from '~tokens/colors/Colors';
import FontSizes from '~tokens/font-sizes/FontSizes';

/**
 * @category Props
 */
export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
	disabled?: boolean;
	htmlFor?: string;
	required?: boolean;
	small?: boolean;
}

/**
 * @category Template
 */
const Label = forwardRef(
	(
		{ children, disabled = false, htmlFor, required = false, small = false, ...rest }: LabelProps,
		ref: ForwardedRef<HTMLLabelElement>
	) => (
		<StyledLabel {...rest} disabled={disabled} htmlFor={htmlFor} ref={ref} small={small}>
			{children}
			{required && <StyledAsterisk aria-label="Required">*</StyledAsterisk>}
		</StyledLabel>
	)
);

Label.displayName = 'Label';
export default Label;

/**
 * @category Styles
 */
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
