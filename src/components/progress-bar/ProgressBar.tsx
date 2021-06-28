import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ForwardedRef, forwardRef, HTMLAttributes } from 'react';
import Colors from '~tokens/colors/Colors';
import Spacings from '~tokens/spacings/Spacings';

/**
 * @category Props
 */
export interface ProgressBarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
	value: number;
	animated?: boolean;
}

/**
 * @category Template
 */
const ProgressBar = forwardRef(
	({ value, animated, ...rest }: ProgressBarProps, ref: ForwardedRef<HTMLDivElement>) => (
		<StyledProgressBar
			{...rest}
			data-tpl="progress-bar"
			animated={animated}
			ref={ref}
			value={value}
		/>
	)
);

ProgressBar.displayName = 'ProgressBar';
export default ProgressBar;

/**
 * @category Styles
 */
type StyledProgressBar = ProgressBarProps;

const StyledProgressBar = styled.div(
	({ value, animated }: StyledProgressBar) => css`
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

			${animated &&
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
