import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ForwardedRef, forwardRef, HTMLAttributes, ReactNode } from 'react';
import FontWeights from '~tokens/font-weights/FontWeights';
import Headings from '~tokens/headings/Headings';
import LineHeights from '~tokens/line-heights/LineHeights';

/**
 * @category Props
 */
export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
	as: HeadingLevel;
	children: ReactNode;
}

/**
 * @category Template
 */
const Heading = forwardRef(
	({ as, children, ...rest }: HeadingProps, ref: ForwardedRef<HTMLHeadingElement>) => (
		<StyledHeading {...rest} as={as} ref={ref}>
			{children}
		</StyledHeading>
	)
);

Heading.displayName = 'Heading';
export default Heading;

/**
 * @category Styles
 */
type StyledHeadingProps = Pick<HeadingProps, 'as'>;

const StyledHeading = styled.h1(
	({ as }: StyledHeadingProps) => css`
		line-height: ${LineHeights.compact};

		${as === 'h1' &&
		css`
			font-size: ${Headings.h1Size};
			font-weight: ${Headings.h1Weight};
		`}

		${(as === 'h2' || as === 'h3' || as === 'h4') &&
		css`
			font-weight: ${FontWeights.bold};
		`}

		${as === 'h2' &&
		css`
			font-size: ${Headings.h2Size};
		`}

		${as === 'h3' &&
		css`
			font-size: ${Headings.h3Size};
		`}

		${as === 'h4' &&
		css`
			font-size: ${Headings.h4Size};
		`}
	`
);
