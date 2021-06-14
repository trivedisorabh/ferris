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
	<StRow alignX={alignX} alignY={alignY} reversed={reversed}>
		{children}
	</StRow>
);

export default Row;

/**
 * @category Styles
 */
type StRowProps = Omit<RowProps, 'children'>;

const StRow = styled.div(
	({ alignX, alignY, reversed }: StRowProps) => css`
		align-items: ${alignY};
		display: flex;
		flex-flow: ${reversed};
		justify-content: ${alignX};
	`
);
