import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ForwardedRef, forwardRef, HTMLAttributes } from 'react';
import Colors from '~tokens/colors/Colors';
import Sizes from '~tokens/sizes/Sizes';

/**
 * @category Props
 */
export interface IconProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'children'> {
	icon: Icon;
	color?: Colors;
	size?: Sizes.size_1 | Sizes.size_1_25;
}

/**
 * @category Template
 */
const Icon = forwardRef(
	(
		{ color, icon, size = Sizes.size_1, ...rest }: IconProps,
		ref: ForwardedRef<HTMLSpanElement>
	) => (
		<StyledIcon {...rest} aria-hidden color={color} data-tpl="Icon" ref={ref} size={size}>
			{icon}
		</StyledIcon>
	)
);

Icon.displayName = 'Icon';
export default Icon;

/**
 * @category Styles
 */
type StyledIconProps = Omit<IconProps, 'icon'>;

const StyledIcon = styled.span(
	({ color, size }: StyledIconProps) => css`
		align-items: center;
		color: ${color};
		display: inline-flex;
		height: ${size};
		justify-content: center;
		user-select: none;
		width: ${size};
	`
);
