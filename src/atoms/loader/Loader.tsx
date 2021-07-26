import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ForwardedRef, forwardRef, HTMLAttributes } from 'react';
import Colors from '~tokens/colors/Colors';
import Sizes from '~tokens/sizes/Sizes';

/**
 * @category Props
 */
export interface LoaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
	small?: boolean;
}

/**
 * @category Template
 */
const Loader = forwardRef(({ small, ...rest }: LoaderProps, ref: ForwardedRef<HTMLDivElement>) => (
	<StyledLoader {...rest} data-tpl="loader" ref={ref} small={small}>
		<svg
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			x="0px"
			y="0px"
			width="100%"
			height="100%"
			viewBox="0 0 52 52"
			enableBackground="new 0 0 0 0"
			xmlSpace="preserve"
		>
			{[getCircle(6, 0.1), getCircle(26, 0.2), getCircle(46, 0.3)]}
		</svg>
	</StyledLoader>
));

Loader.displayName = 'Loader';
export default Loader;

/**
 * @category Helpers
 */
const getCircle = (cx: number, begin: number) => (
	<circle fill={Colors.blueDark} stroke="none" cx={cx} cy="26" r="6" key={cx}>
		<animate
			attributeName="opacity"
			dur="1s"
			values="0;1;0"
			repeatCount="indefinite"
			begin={begin}
		></animate>
	</circle>
);

/**
 * @category Styles
 */
type StyledLoaderProps = LoaderProps;

const StyledLoader = styled.div(
	({ small }: StyledLoaderProps) => css`
		height: ${small ? `${Sizes.size_1_5}` : `${Sizes.size_3}`};
		width: ${small ? `${Sizes.size_1_5}` : `${Sizes.size_3}`};
	`
);
