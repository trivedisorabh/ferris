import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ForwardedRef, forwardRef, HTMLAttributes } from 'react';
import Spacings from '~tokens/spacings/Spacings';

/**
 * @category Props
 */
export interface SpacerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
	orientation?: 'horizontal' | 'vertical';
	spacing?: Spacings;
}

/**
 * @category Template
 */
const Spacer = forwardRef(
	(
		{ orientation = 'horizontal', spacing = Spacings.md, ...rest }: SpacerProps,
		ref: ForwardedRef<HTMLDivElement>
	) => (
		<StyledSpacer
			{...rest}
			data-tpl="spacer"
			orientation={orientation}
			ref={ref}
			spacing={spacing}
		/>
	)
);

Spacer.displayName = 'Spacer';
export default Spacer;

/**
 * @category Styles
 */
type StyledSpacerProps = SpacerProps;

const StyledSpacer = styled.div(
	({ orientation, spacing }: StyledSpacerProps) => css`
		width: ${spacing};

		${orientation === 'vertical' &&
		css`
			height: ${spacing};
			width: auto;
		`}
	`
);
