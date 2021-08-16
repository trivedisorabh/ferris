import styled from '@emotion/styled';
import React, { ForwardedRef, forwardRef, HTMLAttributes } from 'react';

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
	border: 0 !important;
	clip: rect(1px, 1px, 1px, 1px) !important;
	height: 1px !important;
	overflow: hidden !important;
	padding: 0 !important;
	position: absolute !important;
	width: 1px !important;
`;
