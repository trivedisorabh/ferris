import React, { ForwardedRef, forwardRef } from 'react';
import Checkbox, { CheckboxProps } from '~atoms/checkbox/Checkbox';
import Label, { LabelProps } from '~atoms/label/Label';
import Spacings from '~tokens/spacings/Spacings';

export interface CheckboxFieldProps extends CheckboxProps {
	label: string;
	checkboxProps?: Partial<CheckboxProps>;
	labelProps?: Partial<LabelProps>;
}

const CheckboxField = forwardRef(
	(
		{
			id,
			checked,
			defaultChecked,
			onChange,
			disabled,
			checkboxProps,
			label,
			labelProps,
			small,
			indeterminate,
			required,
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
				id={id}
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
