import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ForwardedRef, forwardRef, InputHTMLAttributes, useEffect, useRef } from 'react';
import mergeRefs from 'react-merge-refs';
import { focusOutline } from '~common/styles';
import Colors from '~tokens/colors/Colors';
import Sizes from '~tokens/sizes/Sizes';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	small?: boolean;
	indeterminate?: boolean;
	disabled?: boolean;
	onChange?: () => void;
	checked?: boolean;
	defaultChecked?: boolean;
}

const Checkbox = forwardRef(
	(
		{
			id,
			defaultChecked = false,
			checked = undefined,
			disabled = false,
			onChange,
			small = false,
			indeterminate = false,
			...rest
		}: CheckboxProps,
		ref: ForwardedRef<HTMLInputElement>
	) => {
		const inputRef = useRef<HTMLInputElement>(null);
		useEffect(() => {
			if (!inputRef.current) return;
			inputRef.current.indeterminate = indeterminate;
		});

		const mergedRefs = mergeRefs([ref, inputRef]);

		return (
			<StyledWrapper {...rest} small={small}>
				<StyledCheckbox
					type="checkbox"
					checked={checked}
					defaultChecked={defaultChecked}
					disabled={disabled}
					id={id}
					onChange={onChange}
					ref={mergedRefs}
					small={small}
				/>
				<StyledCheckmark small={small}></StyledCheckmark>
			</StyledWrapper>
		);
	}
);

type StyledCheckboxProps = Pick<CheckboxProps, 'small'>;

const StyledWrapper = styled.div(({ small }: StyledCheckboxProps) => {
	const widthAndHeight = small ? Sizes.size_1_125 : Sizes.size_1_5;

	return css`
		height: ${widthAndHeight};
		position: relative;
		width: ${widthAndHeight};
	`;
});

const StyledCheckbox = styled.input(({ small }: StyledCheckboxProps) => {
	const widthAndHeight = small ? Sizes.size_1_125 : Sizes.size_1_5;

	return css`
		cursor: pointer;
		height: ${widthAndHeight};
		margin: 0;
		opacity: 0;
		position: absolute;
		width: ${widthAndHeight};

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
			opacity: 1;
		}

		&:indeterminate:not(:checked) ~ div::before {
			opacity: 1;
		}

		&:focus-visible ~ div {
			${focusOutline}
		}
	`;
});

const StyledCheckmark = styled.div(({ small }: StyledCheckboxProps) => {
	const widthAndHeight = small ? Sizes.size_1_125 : Sizes.size_1_5;

	return css`
		background-color: ${Colors.white};
		border: solid 1px ${Colors.grayDark};
		border-radius: 2px;
		height: ${widthAndHeight};
		pointer-events: none;
		position: absolute;
		transition: background-color 200ms;
		width: ${widthAndHeight};

		&::after {
			border: solid ${Colors.white};
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

		&::before {
			background-color: ${Colors.white};
			content: '';
			height: ${small ? '3px' : '4px'};
			left: ${small ? '3px' : '4px'};
			opacity: 0;
			position: absolute;
			top: ${small ? '8px' : '10px'};
			transition: opacity 200ms;
			width: ${small ? '12px' : '16px'};
		}
	`;
});

Checkbox.displayName = 'Checkbox';
export default Checkbox;
