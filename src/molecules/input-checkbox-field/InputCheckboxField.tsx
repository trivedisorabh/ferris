import styled from '@emotion/styled';
import React, { ChangeEventHandler, ForwardedRef, forwardRef, HTMLAttributes } from 'react';
import InputCheckbox, { InputCheckboxProps } from '~atoms/input-checkbox/InputCheckbox';
import Label, { LabelProps } from '~atoms/label/Label';
import Colors from '~tokens/colors/Colors';
import Sizes from '~tokens/sizes/Sizes';

/**
 * @category Props
 */
export interface InputCheckboxFieldProps extends HTMLAttributes<HTMLInputElement> {
	id: string;
	change: ChangeEventHandler;
	checked?: boolean;
	children?: React.ReactNode;
	disabled?: boolean;
	inputCheckboxProps?: Partial<InputCheckboxProps>;
	label?: string;
	labelProps?: Partial<LabelProps>;
	small?: boolean;
}

/**
 * @category Template
 */
const InputCheckboxField = forwardRef(
	(
		{
			id,
			change,
			checked,
			disabled,
			inputCheckboxProps,
			label,
			labelProps,
			small,
		}: InputCheckboxFieldProps,
		ref: ForwardedRef<HTMLInputElement>
	) => (
		<Label
			{...labelProps}
			id={id}
			className={`checkbox-label ${small ? 'small' : ''}`}
			data-tpl="input-checkbox-field"
		>
			{label}
			<InputCheckbox
				{...inputCheckboxProps}
				id={id}
				disabled={disabled}
				checked={checked}
				onChange={change}
			/>
			<StyledSpan id={id} ref={ref} className={`checkmark ${small ? 'small' : ''}`}></StyledSpan>
		</Label>
	)
);
InputCheckboxField.displayName = 'InputCheckboxField';
export default InputCheckboxField;

/**
 * @category Styles
 */
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
