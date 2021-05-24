import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ReactChild } from 'react';

/**
 * @category Props
 */
export type TitleLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface TitleProps {
	as: TitleLevel;
	children: ReactChild;
}

/**
 * @category Template
 */
const Title = ({ as, children }: TitleProps) => <StTitle as={as}>{children}</StTitle>;

export default Title;

/**
 * @category Styles
 */
type StProps = Pick<TitleProps, 'as'>;

const StTitle = styled.h1(
	({ as }: StProps) => css`
		color: black;

		${as === 'h2' &&
		css`
			color: red;
		`}

		${as === 'h3' &&
		css`
			color: green;
		`}

		${as === 'h3' &&
		css`
			color: green;
		`}
	`
);
