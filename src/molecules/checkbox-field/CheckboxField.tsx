import styled from '@emotion/styled';
import React, { ForwardedRef, forwardRef } from 'react';
import Checkbox, { CheckboxProps } from '~atoms/checkbox/Checkbox';
import Label, { LabelProps } from '~atoms/label/Label';
import Spacings from '~tokens/spacings/Spacings';

/**
 * @category Props
 */
export interface CheckboxFieldProps extends CheckboxProps, Pick<LabelProps, 'required'> {
	checkboxProps?: Partial<CheckboxProps>;
	label: string;
	labelProps?: Partial<LabelProps>;
	required?: boolean;
}

/**
 * @category Template
 */
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
		<StyledLabel {...labelProps} disabled={disabled} small={small} required={required}>
			<StyledCheckbox
				{...checkboxProps}
				checked={checked}
				onChange={onChange}
				disabled={disabled}
				defaultChecked={defaultChecked}
				small={small}
				indeterminate={indeterminate}
				ref={ref}
			/>
			{label}
		</StyledLabel>
	)
);

CheckboxField.displayName = 'CheckboxField';
export default CheckboxField;

/**
 * @category Styles
 */
const StyledLabel = styled(Label)`
	align-items: center;
	display: flex;
	max-width: max-content;
`;

const StyledCheckbox = styled(Checkbox)`
	margin-inline-end: ${Spacings.xs};
`;
