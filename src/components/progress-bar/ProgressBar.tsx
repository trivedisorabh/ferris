import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import Colors from '~tokens/colors/Colors';
import Spacings from '~tokens/spacings/Spacings';

/**
 * @category Props
 */
export interface ProgressBarProps {
	value: number;
	isAnimated?: boolean;
}

/**
 * @category Template
 */
const ProgressBar = ({ value, isAnimated }: ProgressBarProps) => (
	<StRoot value={value} isAnimated={isAnimated} />
);

export default ProgressBar;

/**
 * @category Styles
 */
type StRootProps = ProgressBarProps;

const StRoot = styled.div(
	({ value, isAnimated }: StRootProps) => css`
		background: ${Colors.grayBase};
		border-radius: ${Spacings.xxs};
		height: ${Spacings.xs};
		overflow: hidden;
		position: relative;

		&::after {
			background: ${Colors.blueDark};
			border-radius: inherit;
			content: '';
			height: inherit;
			left: 0;
			position: absolute;
			right: ${100 - value}%;
			top: 0;
			transition: right 0.2s cubic-bezier(0.4, 0.93, 0.71, 0.89);

			${isAnimated &&
			css`
				animation: progressAnimation 0.5s linear infinite reverse;
				background-image: linear-gradient(
					-45deg,
					rgba(255, 255, 255, 0.2) 25%,
					transparent 25%,
					transparent 50%,
					rgba(255, 255, 255, 0.2) 50%,
					rgba(255, 255, 255, 0.2) 75%,
					transparent 75%,
					transparent
				);
				background-size: 50px 50px;
			`}
		}

		@keyframes progressAnimation {
			to {
				background-position: 50px 50px;
			}
		}
	`
);
