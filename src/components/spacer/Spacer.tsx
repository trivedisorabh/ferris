import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import Spacings from '~tokens/spacings/Spacings';

/**
 * @category Props
 */
export interface SpacerProps {
	orientation?: 'horizontal' | 'vertical';
	spacing?: Spacings;
}

/**
 * @category Template
 */
const Spacer = ({ orientation = 'horizontal', spacing = Spacings.md }: SpacerProps) => (
	<StRoot data-tpl="spacer" orientation={orientation} spacing={spacing} />
);

export default Spacer;

/**
 * @category Styles
 */
type StRootProps = SpacerProps;

const StRoot = styled.div(
	({ orientation, spacing }: StRootProps) => css`
		width: ${spacing};

		${orientation === 'vertical' &&
		css`
			height: ${spacing};
			width: auto;
		`}
	`
);
