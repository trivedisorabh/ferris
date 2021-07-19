import styled from '@emotion/styled';
import React, { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';
import Colors from '~tokens/colors/Colors';
import Sizes from '~tokens/sizes/Sizes';

/**
 * @category Props
 */
export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	small?: boolean;
}

/**
 * @category Template
 */
const Checkbox = forwardRef(
	(
		{ id, defaultChecked, checked, disabled, onChange, small, ...rest }: CheckboxProps,
		ref: ForwardedRef<HTMLInputElement>
	) => {
		return (
			<>
				<StyledCheckbox
					type="checkbox"
					checked={checked}
					defaultChecked={defaultChecked}
					disabled={disabled}
					id={id}
					onChange={onChange}
					ref={ref}
					{...rest}
				/>
				<StyledSpan ref={ref} className={`checkmark ${small ? 'small' : ''}`}></StyledSpan>
			</>
		);
	}
);

Checkbox.displayName = 'Checkbox';
export default Checkbox;

/**
 * @category Styles
 */
const StyledCheckbox = styled.input`
	cursor: pointer;
	height: ${Sizes.size_1_5};
	margin: 0;
	opacity: 0;
	position: absolute;
	width: ${Sizes.size_1_5};

	&:disabled ~ .checkmark {
		background-color: ${Colors.grayDark} !important;
		border: none;
	}

	&:checked ~ .checkmark {
		background-color: ${Colors.brandBase};
		border: none;
	}

	&:checked ~ .checkmark::after {
		display: block;
	}
`;

const StyledSpan = styled.div`
	background-color: ${Colors.white};
	border: solid 1px ${Colors.grayDark};
	border-radius: 2px;
	height: ${Sizes.size_1_5};
	pointer-events: none;
	position: relative;
	width: ${Sizes.size_1_5};

	&::after {
		border: solid ${Colors.white};
		border-width: 0 3px 3px 0;
		content: '';
		display: none;
		height: 14px;
		left: 9px;
		position: absolute;
		top: 4px;
		-ms-transform: rotate(45deg);
		-webkit-transform: rotate(45deg);
		transform: rotate(45deg);
		width: 6px;
	}

	&.small {
		height: ${Sizes.size_1_125};
		width: ${Sizes.size_1_125};

		&::after {
			height: 12px;
			left: 6px;
			top: 2px;
		}
	}
`;
