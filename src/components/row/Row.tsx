import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { CSSProperties, ForwardedRef, forwardRef, HTMLAttributes, ReactNode } from 'react';

/**
 * @category Props
 */
export interface RowProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	alignX?: CSSProperties['justifyContent'];
	alignY?: CSSProperties['alignItems'];
	reversed?: 'row-reverse';
}

/**
 * @category Template
 */
const Row = forwardRef(
	(
		{ alignX, alignY = 'center', children, reversed, ...rest }: RowProps,
		ref: ForwardedRef<HTMLDivElement>
	) => (
		<StyledRow
			{...rest}
			data-tpl="row"
			alignX={alignX}
			alignY={alignY}
			ref={ref}
			reversed={reversed}
		>
			{children}
		</StyledRow>
	)
);

Row.displayName = 'Row';
export default Row;

/**
 * @category Styles
 */
type StyledRowProps = Omit<RowProps, 'children'>;

const StyledRow = styled.div(
	({ alignX, alignY, reversed }: StyledRowProps) => css`
		align-items: ${alignY};
		display: flex;
		flex-flow: ${reversed};
		justify-content: ${alignX};
	`
);
