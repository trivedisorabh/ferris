import styled from '@emotion/styled';
import React, { ForwardedRef, forwardRef, HTMLAttributes } from 'react';
import InputCheckbox, { InputCheckboxProps } from '~atoms/input-checkbox/InputCheckbox';
import Label, { LabelProps } from '~atoms/label/Label';
import Colors from '~tokens/colors/Colors';

/**
 * @category Props
 */
export interface InputCheckboxFieldProps extends HTMLAttributes<HTMLDivElement> {
	id: string;
	label?: string;
	inputCheckboxProps?: Partial<InputCheckboxProps>;
	labelProps?: Partial<LabelProps>;
}

/**
 * @category Template
 */
const InputCheckboxField = forwardRef(
	(
		{ id, label, labelProps, inputCheckboxProps }: InputCheckboxFieldProps,
		ref: ForwardedRef<HTMLDivElement>
	) => (
		<Label {...labelProps} id={id} data-tpl="input-checkbox-field" className="checkbox-label">
			{label}
			<InputCheckbox {...inputCheckboxProps} id={id} />
			<StyledInputCheckboxField ref={ref} className="checkmark"></StyledInputCheckboxField>
		</Label>
	)
);

InputCheckboxField.displayName = 'InputCheckboxField';
export default InputCheckboxField;

/**
 * @category Styles
 */
const StyledInputCheckboxField = styled.span`
	background-color: ${Colors.white};
	border: solid 1px ${Colors.grayDark};
	border-radius: 2px;
	height: 25px;
	left: 0;
	position: absolute;
	top: 0;
	width: 25px;

	&::after {
		border: solid ${Colors.white};
		border-width: 0 3px 3px 0;
		content: '';
		display: none;
		height: 10px;
		left: 9px;
		position: absolute;
		top: 5px;
		-ms-transform: rotate(45deg);
		-webkit-transform: rotate(45deg);
		transform: rotate(45deg);
		width: 5px;
	}
`;
