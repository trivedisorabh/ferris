import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ForwardedRef, forwardRef, HTMLAttributes, ReactNode } from 'react';
import FontSizes from '~tokens/font-sizes/FontSizes';

/**
 * @category Props
 */
export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
	children: ReactNode;
	size?: 'small' | 'medium' | 'large';
}

/**
 * @category Template
 */
const Paragraph = forwardRef(
	(
		{ children, size = 'medium', ...rest }: ParagraphProps,
		ref: ForwardedRef<HTMLParagraphElement>
	) => (
		<StyledParagraph {...rest} ref={ref} size={size}>
			{children}
		</StyledParagraph>
	)
);

Paragraph.displayName = 'Paragraph';
export default Paragraph;

/**
 * @category Styles
 */
type StyledParagraphProps = Pick<ParagraphProps, 'size'>;

const StyledParagraph = styled.p(
	({ size }: StyledParagraphProps) => css`
		margin: 0;

		${size === 'small' &&
		css`
			font-size: ${FontSizes.sm};
		`}

		${size === 'medium' &&
		css`
			font-size: ${FontSizes.md};
		`}

		${size === 'large' &&
		css`
			font-size: ${FontSizes.lg};
		`}
	`
);
