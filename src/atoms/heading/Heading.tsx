import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ForwardedRef, forwardRef, HTMLAttributes, ReactNode } from 'react';
import FontSizes from '~tokens/font-sizes/FontSizes';
import FontWeights from '~tokens/font-weights/FontWeights';
import Headings from '~tokens/headings/Headings';
import LineHeights from '~tokens/line-heights/LineHeights';

/**
 * @category Props
 */
export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4';

export type HeadingStyle = {
	fontSize?: FontSizes;
	fontWeight?: FontWeights;
};

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
	as: HeadingLevel;
	children: ReactNode;
	headingStyle?: HeadingStyle;
}

/**
 * @category Template
 */
const Heading = forwardRef(
	(
		{ as, children, headingStyle, ...rest }: HeadingProps,
		ref: ForwardedRef<HTMLHeadingElement>
	) => (
		<StyledHeading {...rest} as={as} ref={ref} headingStyle={headingStyle}>
			{children}
		</StyledHeading>
	)
);

Heading.displayName = 'Heading';
export default Heading;

/**
 * @category Styles
 */
type StyledHeadingProps = Pick<HeadingProps, 'as' | 'headingStyle'>;

const StyledHeading = styled.h1(
	({ as, headingStyle }: StyledHeadingProps) => css`
		line-height: ${LineHeights.compact};

		${as === 'h1' &&
		css`
			font-size: ${Headings.h1Size};
			font-weight: ${Headings.h1Weight};
		`}

		${as === 'h2' &&
		css`
			font-size: ${Headings.h2Size};
			font-weight: ${Headings.h2Weight};
		`}

		${as === 'h3' &&
		css`
			font-size: ${Headings.h3Size};
			font-weight: ${Headings.h3Weight};
		`}

		${as === 'h4' &&
		css`
			font-size: ${Headings.h4Size};
			font-weight: ${Headings.h4Weight};
		`}

		${headingStyle?.fontSize &&
		css`
			font-size: ${headingStyle.fontSize};
		`}

		${headingStyle?.fontWeight &&
		css`
			font-weight: ${headingStyle.fontWeight};
		`}
	`
);
