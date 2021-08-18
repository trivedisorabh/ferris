import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ForwardedRef, forwardRef, useEffect, useRef } from 'react';
import mergeRefs from 'react-merge-refs';
import { focusOutline } from '~common/styles';
import Colors from '~tokens/colors/Colors';
import FontSizes from '~tokens/font-sizes/FontSizes';
import Sizes from '~tokens/sizes/Sizes';
import Spacings from '~tokens/spacings/Spacings';

export interface RadioProps {
	checked?: boolean;
	defaultChecked?: boolean;
	disabled?: boolean;
	groupName?: string;
	id: string;
	onChange?: () => void;
	small?: boolean;
	value?: string;
}

const Radio = forwardRef(
	(
		{
			checked,
			defaultChecked = false,
			disabled = false,
			groupName,
			id,
			onChange,
			small = false,
			value,
			...rest
		}: RadioProps,
		ref: ForwardedRef<HTMLInputElement>
	) => {
		const inputRef = useRef<HTMLInputElement>(null);
		useEffect(() => {
			if (!inputRef.current) return;
		});

		const mergedRefs = mergeRefs([ref, inputRef]);

		return (
			<StyledWrapper
				{...rest}
				// small={small}
			>
				<StyledRadio
					checked={checked}
					defaultChecked={defaultChecked} // This currently gives a console warning. How to let the user choose controlled/uncontrolled?
					disabled={disabled}
					id={id}
					name={groupName}
					onChange={onChange}
					ref={mergedRefs}
					type="radio"
					value={value}
					// small={small}
				/>
				<StyledCheckmark small={small}></StyledCheckmark>
			</StyledWrapper>
		);
	}
);

type StyledRadioProps = Pick<RadioProps, 'small'>;

// const StyledWrapper = styled.div(({ small }: StyledRadioProps) => {
const StyledWrapper = styled.div(() => {
	return css`
		cursor: pointer;
		display: block;
		font-size: ${FontSizes.lg};
		margin-bottom: ${Spacings.sm};
		padding-left: ${Spacings.xxl};
		position: relative;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	`;
});

// const StyledRadio = styled.input(({ small }: StyledRadioProps) => {
const StyledRadio = styled.input(() => {
	// const widthAndHeight = small ? Sizes.size_1_125 : Sizes.size_1_5;

	return css`
		cursor: pointer;
		height: 0;
		opacity: 0;
		position: absolute;
		width: 0;

		&:disabled {
			cursor: not-allowed;
		}

		&:disabled ~ div {
			background-color: ${Colors.grayDark} !important;
			border: none;
		}

		&:checked ~ div,
		&:indeterminate ~ div {
			background-color: ${Colors.brandBase};
			border: none;
		}

		&:checked ~ div::after {
			content: '';
			display: none;
			opacity: 1;
			position: absolute;
		}

		&:indeterminate:not(:checked) ~ div::before {
			opacity: 1;
		}

		&:focus-visible ~ div {
			${focusOutline}
		}
	`;
});

const StyledCheckmark = styled.div(({ small }: StyledRadioProps) => {
	const widthAndHeight = small ? Sizes.size_1_125 : Sizes.size_1_5;

	return css`
		background-color: ${Colors.white};
		border-radius: 50%;
		height: ${widthAndHeight};
		left: 0;
		position: absolute;
		top: 0;
		width: ${widthAndHeight};

		&::after {
			border: solid ${Colors.white};
			border-radius: 50%;
			border-width: 0 3px 3px 0;
			content: '';
			height: ${small ? '12px' : '14px'};
			left: ${small ? '6px' : '9px'};
			opacity: 0;
			position: absolute;
			top: ${small ? '2px' : '4px'};
			-ms-transform: rotate(45deg);
			-webkit-transform: rotate(45deg);
			transform: rotate(45deg);
			transition: opacity 200ms;
			width: 6px;
		}
	`;
});

Radio.displayName = 'Radio';
export default Radio;
