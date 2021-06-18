import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { CSSProperties, ReactNode } from 'react';

/**
 * @category Props
 */
export interface RowProps {
	alignX?: CSSProperties['justifyContent'];
	alignY?: CSSProperties['alignItems'];
	children: ReactNode;
	reversed?: 'row-reverse';
}

/**
 * @category Template
 */
const Row = ({ alignX, alignY = 'center', children, reversed }: RowProps) => (
	<StRoot data-tpl="row" alignX={alignX} alignY={alignY} reversed={reversed}>
		{children}
	</StRoot>
);

export default Row;

/**
 * @category Styles
 */
type StRootProps = Omit<RowProps, 'children'>;

const StRoot = styled.div(
	({ alignX, alignY, reversed }: StRootProps) => css`
		align-items: ${alignY};
		display: flex;
		flex-flow: ${reversed};
		justify-content: ${alignX};
	`
);
