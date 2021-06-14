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
	<StSpacer orientation={orientation} spacing={spacing} />
);

export default Spacer;

/**
 * @category Styles
 */
type StSpacerProps = SpacerProps;

const StSpacer = styled.div(
	({ orientation, spacing }: StSpacerProps) => css`
		width: ${spacing};

		${orientation === 'vertical' &&
		css`
			height: ${spacing};
			width: auto;
		`}
	`
);
