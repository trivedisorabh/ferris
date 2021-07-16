import styled from '@emotion/styled';
import React, { ChangeEvent, ForwardedRef, forwardRef, InputHTMLAttributes, useState } from 'react';
import Colors from '~tokens/colors/Colors';
import Sizes from '~tokens/sizes/Sizes';

/**
 * @category Props
 */
export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	id: string;
	checked?: boolean;
	disabled?: boolean;
	small?: boolean;
}

/**
 * @category Template
 */
const Checkbox = forwardRef(
	(
		{ id, checked = false, disabled, small, ...rest }: CheckboxProps,
		ref: ForwardedRef<HTMLInputElement>
	) => {
		const [value, setValue] = useState<boolean>(checked);

		const onChangeHandler = (e: ChangeEvent) => {
			const target = e.target as HTMLInputElement;
			setValue(target.checked);
		};

		return (
			<>
				<StyledCheckbox
					{...rest}
					disabled={disabled}
					defaultChecked={value}
					id={id}
					onChange={onChangeHandler}
					ref={ref}
					type="checkbox"
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
	height: 0;
	opacity: 0;
	position: absolute;
	width: 0;

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

const StyledSpan = styled.span`
	background-color: ${Colors.white};
	border: solid 1px ${Colors.grayDark};
	border-radius: 2px;
	height: ${Sizes.size_1_5};
	left: 0;
	position: absolute;
	top: 0;
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
