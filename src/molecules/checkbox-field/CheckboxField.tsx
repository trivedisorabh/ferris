import React, { ForwardedRef, forwardRef, HTMLAttributes } from 'react';
import Checkbox, { CheckboxProps } from '~atoms/checkbox/Checkbox';
import Label, { LabelProps } from '~atoms/label/Label';

/**
 * @category Props
 */
export interface CheckboxFieldProps extends HTMLAttributes<HTMLInputElement> {
	id: string;
	checkboxProps?: Partial<CheckboxProps>;
	checked?: boolean;
	disabled?: boolean;
	label?: string;
	labelProps?: Partial<LabelProps>;
	small?: boolean;
}

/**
 * @category Template
 */
const CheckboxField = forwardRef(
	(
		{ id, checked = false, disabled, checkboxProps, label, labelProps, small }: CheckboxFieldProps,
		ref: ForwardedRef<HTMLInputElement>
	) => (
		<Label
			{...labelProps}
			id={id}
			className={`checkbox-label ${small ? 'small' : ''}`}
			data-tpl="input-checkbox-field"
		>
			{label}
			<Checkbox
				{...checkboxProps}
				id={id}
				disabled={disabled}
				defaultChecked={checked}
				className="checkbox"
				small={small}
				ref={ref}
			/>
		</Label>
	)
);
CheckboxField.displayName = 'CheckboxField';
export default CheckboxField;
