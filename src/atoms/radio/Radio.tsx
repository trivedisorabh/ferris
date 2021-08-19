import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ForwardedRef, forwardRef, useEffect, useRef } from 'react';
import mergeRefs from 'react-merge-refs';
import { focusOutline } from '~common/styles';
import Colors from '~tokens/colors/Colors';
import Sizes from '~tokens/sizes/Sizes';

/**
 * @category Props
 */
export interface RadioProps {
	checked?: boolean;
	defaultChecked?: boolean;
	disabled?: boolean;
	groupName?: string;
	id: string;
	onChange?: () => void;
	small?: boolean;
	value?: string | number;
}

/**
 * @category Template
 */
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
			<StyledRadio {...rest} data-tpl="radio">
				<StyledInput
					checked={checked}
					defaultChecked={defaultChecked} // This currently gives a console warning. How to let the user choose controlled/uncontrolled?
					disabled={disabled}
					id={id}
					name={groupName}
					onChange={onChange}
					ref={mergedRefs}
					type="radio"
					value={value}
				/>
				<StyledCheckmark small={small}></StyledCheckmark>
			</StyledRadio>
		);
	}
);

Radio.displayName = 'Radio';
export default Radio;

/**
 * @category Styles
 */
type StyledRadioProps = Pick<RadioProps, 'small'>;

const StyledRadio = styled.div`
	display: block;
	position: relative;
`;

const StyledInput = styled.input(({ small }: StyledRadioProps) => {
	const widthAndHeight = small ? Sizes.size_1_125 : Sizes.size_1_5;

	return css`
		cursor: pointer;
		height: ${widthAndHeight};
		margin: 0;
		opacity: 0;
		width: ${widthAndHeight};

		&:disabled {
			cursor: not-allowed;
		}

		&:disabled ~ div {
			background-color: ${Colors.grayLight} !important;
		}

		&:checked ~ div {
			background-color: ${Colors.brandBase};
		}

		&:checked:not(:disabled) ~ div {
			border: 0;
		}

		&:checked ~ div::after {
			content: '';
			opacity: 1;
			position: absolute;
		}

		&:focus-visible ~ div {
			${focusOutline}
		}
	`;
});

const StyledCheckmark = styled.div(({ small }: StyledRadioProps) => {
	const widthAndHeight = small ? Sizes.size_1_125 : Sizes.size_1_5;

	return css`
		align-items: center;
		background-color: ${Colors.white};
		border: solid 2px ${Colors.grayBasedark};
		border-radius: 50%;
		display: flex;
		height: ${widthAndHeight};
		justify-content: center;
		left: 0;
		pointer-events: none;
		position: absolute;
		top: 0;
		width: ${widthAndHeight};

		&::after {
			background-color: ${Colors.white};
			border-radius: 50%;
			content: '';
			height: 44%;
			opacity: 0;
			transition: opacity 200ms;
			width: 44%;
		}
	`;
});
