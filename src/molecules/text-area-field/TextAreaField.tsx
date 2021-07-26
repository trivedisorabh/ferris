import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ForwardedRef, forwardRef, HTMLAttributes } from 'react';
import Label, { LabelProps } from '~atoms/label/Label';
import TextArea, { TextAreaProps } from '~atoms/text-area/TextArea';
import Colors from '~tokens/colors/Colors';

/**
 * @category Props
 */
export interface TextAreaFieldProps extends HTMLAttributes<HTMLDivElement> {
	id: string;
	label: string;
	description?: string;
	disabled?: boolean;
	labelProps?: LabelProps;
	required?: boolean;
	textAreaProps?: Partial<TextAreaProps>;
	value?: string;
}

/**
 * @category Template
 */
const TextAreaField = forwardRef(
	(
		{
			id,
			label,
			description,
			disabled,
			labelProps,
			required,
			textAreaProps,
			value,
			...rest
		}: TextAreaFieldProps,
		ref: ForwardedRef<HTMLDivElement>
	) => (
		<StyledTextAreaField {...rest} data-tpl="text-area-field" disabled={disabled} ref={ref}>
			<Label {...labelProps} htmlFor={id} required={required}>
				{label}
			</Label>
			{description && <StyledDescription>{description}</StyledDescription>}
			<TextArea {...textAreaProps} id={id} disabled={disabled} required={required} value={value} />
		</StyledTextAreaField>
	)
);

TextAreaField.displayName = 'TextAreaField';
export default TextAreaField;

/**
 * @category Styles
 */
type StyledTextAreaFieldProps = Pick<TextAreaFieldProps, 'disabled'>;

const StyledTextAreaField = styled.div(
	({ disabled }: StyledTextAreaFieldProps) => css`
		opacity: ${disabled && '0.5'};
	`
);

const StyledDescription = styled.div`
	color: ${Colors.grayDarkest};
`;
