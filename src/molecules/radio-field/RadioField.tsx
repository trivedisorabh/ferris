import styled from '@emotion/styled';
import React, { ForwardedRef, forwardRef } from 'react';
import Label, { LabelProps } from '~atoms/label/Label';
import Radio, { RadioProps } from '~atoms/radio/Radio';
import Spacings from '~tokens/spacings/Spacings';

/**
 * @category Props
 */
export interface RadioFieldProps {
	checked?: boolean;
	defaultChecked?: boolean;
	disabled?: boolean;
	groupName?: string;
	id: string;
	label: string;
	labelProps?: Partial<LabelProps>;
	onChange?: () => void;
	radioProps?: Partial<RadioProps>;
	required?: boolean;
	small?: boolean;
	value?: string | number;
}

/**
 * @category Template
 */
const RadioField = forwardRef(
	(
		{
			checked,
			defaultChecked,
			disabled = false,
			groupName,
			id,
			label,
			labelProps,
			onChange,
			radioProps,
			required = false,
			small = false,
			value,
		}: RadioFieldProps,
		ref: ForwardedRef<HTMLInputElement>
	) => (
		<StyledLabel
			{...labelProps}
			data-tpl="radio-field"
			disabled={disabled}
			id={id}
			required={required}
			small={small}
		>
			<StyledRadio
				{...radioProps}
				checked={checked}
				defaultChecked={defaultChecked}
				disabled={disabled}
				groupName={groupName}
				id={id}
				onChange={onChange}
				ref={ref}
				small={small}
				value={value}
			/>
			{label}
		</StyledLabel>
	)
);

RadioField.displayName = 'RadioField';
export default RadioField;

/**
 * @category Styles
 */
const StyledLabel = styled(Label)`
	align-items: center;
	display: flex;
	max-width: max-content;
`;

const StyledRadio = styled(Radio)`
	margin-inline-end: ${Spacings.xs};
`;
