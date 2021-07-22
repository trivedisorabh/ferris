import React, { ForwardedRef, forwardRef } from 'react';
import Checkbox, { CheckboxProps } from '~atoms/checkbox/Checkbox';
import Label, { LabelProps } from '~atoms/label/Label';
import Spacings from '~tokens/spacings/Spacings';

export interface CheckboxFieldProps extends CheckboxProps, Pick<LabelProps, 'required'> {
	label: string;
	checkboxProps?: Partial<CheckboxProps>;
	labelProps?: Partial<LabelProps>;
	required: boolean;
}

const CheckboxField = forwardRef(
	(
		{
			checked,
			defaultChecked,
			onChange,
			disabled = false,
			checkboxProps,
			label,
			labelProps,
			small = false,
			indeterminate = false,
			required = false,
		}: CheckboxFieldProps,
		ref: ForwardedRef<HTMLInputElement>
	) => (
		<Label
			{...labelProps}
			disabled={disabled}
			small={small}
			style={{ display: 'flex', alignItems: 'center', maxWidth: 'max-content' }}
			required={required}
		>
			<Checkbox
				{...checkboxProps}
				checked={checked}
				onChange={onChange}
				disabled={disabled}
				defaultChecked={defaultChecked}
				small={small}
				indeterminate={indeterminate}
				ref={ref}
				style={{ marginInlineEnd: Spacings.xs }}
			/>
			{label}
		</Label>
	)
);

CheckboxField.displayName = 'CheckboxField';
export default CheckboxField;
