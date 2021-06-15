import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { HTMLAttributes, ReactNode } from 'react';
import FontWeights from '~tokens/font-weights/FontWeights';
import Headings from '~tokens/headings/Headings';
import LineHeights from '~tokens/line-heights/LineHeights';

/**
 * @category Props
4 */
export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4';

export interface HeadingProps extends HTMLAttributes<HTMLHeadElement> {
	as: HeadingLevel;
	children: ReactNode;
}

/**
 * @category Template
 */
const Heading = ({ as, children, ...rest }: HeadingProps) => (
	<StHeading {...rest} as={as}>
		{children}
	</StHeading>
);

export default Heading;

/**
 * @category Styles
 */
type StHeadingProps = Pick<HeadingProps, 'as'>;

const StHeading = styled.h1(
	({ as }: StHeadingProps) => css`
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
