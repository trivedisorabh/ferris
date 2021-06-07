import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ReactNode } from 'react';

/**
 * @category Props
 */
export interface RowProps {
	alignX?: 'space-between' | 'space-around';
	alignY?: 'center' | 'flex-end' | 'flex-start';
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
		display: flex;
		flex-flow: ${reversed};
		align-items: ${alignY};
		justify-content: ${alignX};
	`
);
