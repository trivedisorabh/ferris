import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

/**
 * @category Props
 */
export interface SpacerProps {
	orientation?: 'horizontal' | 'vertical';
}

/**
 * @category Template
 */
const Spacer = ({ orientation = 'horizontal' }: SpacerProps) => (
	<StSpacer orientation={orientation} />
);

export default Spacer;

/**
 * @category Styles
 */
type StSpacerProps = Pick<SpacerProps, 'orientation'>;

const StSpacer = styled.div(
	({ orientation }: StSpacerProps) => css`
		width: 1rem;

		${orientation === 'vertical' &&
		css`
			width: auto;
			height: 1rem;
		`}
	`
);
