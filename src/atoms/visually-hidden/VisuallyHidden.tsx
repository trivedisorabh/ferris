import styled from '@emotion/styled';
import React, { ForwardedRef, forwardRef, HTMLAttributes } from 'react';
import { visuallyHidden } from '~common/styles';

/**
 * @category Props
 */
export interface VisuallyHiddenProps extends HTMLAttributes<HTMLSpanElement> {
	children: React.ReactNode;
}

/**
 * @category Template
 */
const VisuallyHidden = forwardRef(
	({ children, ...rest }: VisuallyHiddenProps, ref: ForwardedRef<HTMLSpanElement>) => (
		<StyledVisuallyHidden {...rest} data-tpl="visually-hidden" ref={ref}>
			{children}
		</StyledVisuallyHidden>
	)
);

VisuallyHidden.displayName = 'VisullayHidden';
export default VisuallyHidden;

/**
 * @category Styles
 */
const StyledVisuallyHidden = styled.span`
	${visuallyHidden};
`;
