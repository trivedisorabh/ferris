import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ForwardedRef, forwardRef, HTMLAttributes, ReactNode } from 'react';
import Headings from '~tokens/headings/Headings';
import LineHeights from '~tokens/line-heights/LineHeights';

/**
 * @category Props
 */
export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
	as: HeadingLevel;
	styledAs?: HeadingLevel;
	children: ReactNode;
}

/**
 * @category Template
 */
const Heading = forwardRef(
	({ as, children, styledAs, ...rest }: HeadingProps, ref: ForwardedRef<HTMLHeadingElement>) => (
		<StyledHeading {...rest} as={as} ref={ref} styledAs={styledAs}>
			{children}
		</StyledHeading>
	)
);

Heading.displayName = 'Heading';
export default Heading;

/**
 * @category Styles
 */
type StyledHeadingProps = Pick<HeadingProps, 'as' | 'styledAs'>;

const StyledHeading = styled.h1((props: StyledHeadingProps) => {
	const stylingLevel = props.styledAs || props.as;

	return css`
		line-height: ${LineHeights.compact};

		${stylingLevel === 'h1' &&
		css`
			font-size: ${Headings.h1Size};
			font-weight: ${Headings.h1Weight};
		`}

		${stylingLevel === 'h2' &&
		css`
			font-size: ${Headings.h2Size};
			font-weight: ${Headings.h2Weight};
		`}

		${stylingLevel === 'h3' &&
		css`
			font-size: ${Headings.h3Size};
			font-weight: ${Headings.h3Weight};
		`}

		${stylingLevel === 'h4' &&
		css`
			font-size: ${Headings.h4Size};
			font-weight: ${Headings.h4Weight};
		`}
	`;
});
