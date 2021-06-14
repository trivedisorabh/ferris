import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ReactChild } from 'react';
import FontSizes from '~tokens/font-sizes/FontSizes';
import FontWeights from '~tokens/font-weights/FontWeights';
import LineHeights from '~tokens/line-heights/LineHeights';

/**
 * @category Props
4 */
export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4';

export interface HeadingProps {
	as: HeadingLevel;
	children: ReactChild;
}

/**
 * @category Template
 */
const Heading = ({ as, children }: HeadingProps) => <StHeading as={as}>{children}</StHeading>;

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
			font-size: ${FontSizes.xxxl};
			font-weight: ${FontWeights.normal};
		`}

		${(as === 'h2' || as === 'h3' || as === 'h4') &&
		css`
			font-weight: ${FontWeights.bold};
		`}

		${as === 'h2' &&
		css`
			font-size: ${FontSizes.xxl};
		`}

		${as === 'h3' &&
		css`
			font-size: ${FontSizes.xl};
		`}

		${as === 'h4' &&
		css`
			font-size: ${FontSizes.lg};
		`}
	`
);
