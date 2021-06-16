import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import Colors from '~tokens/colors/Colors';
import Spacings from '~tokens/spacings/Spacings';

/**
 * @category Props
 */
export interface LoaderProps {
	isSmall?: boolean;
}

/**
 * @category Template
 */
const Loader = ({ isSmall }: LoaderProps) => (
	<StLoader isSmall={isSmall}>
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
	</StLoader>
);

export default Loader;

/**
 * @category Helpers
 */
const getCircle = (cx: number, begin: number) => (
	<circle fill={Colors.blueDark} stroke="none" cx={cx} cy="26" r="6">
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
type StLoaderProps = LoaderProps;

const StLoader = styled.div(
	({ isSmall }: StLoaderProps) => css`
		height: ${isSmall ? `${Spacings.xl}` : `${Spacings.xxxl}`};
		width: ${isSmall ? `${Spacings.xl}` : `${Spacings.xxxl}`};
	`
);
